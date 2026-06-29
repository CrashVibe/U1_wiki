import { createHash } from 'node:crypto'
import { readFileSync, existsSync, writeFileSync, readdirSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { join, basename } from 'node:path'

const WIKI_DIR = 'docs/yaoyi-func'
const INDEX_FILE = '.github/wiki-index.json'

const EMB_KEY = process.env.EMBEDDING_API_KEY
const EMB_BASE = (process.env.EMBEDDING_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '')
const EMB_MODEL = process.env.EMBEDDING_MODEL
const EMB_DIM = parseInt(process.env.EMBEDDING_DIM || '1024')
const CF_ACCOUNT = process.env.CF_ACCOUNT_ID
const CF_INDEX = process.env.CF_VECTORIZE_INDEX
const CF_TOKEN = process.env.CF_API_TOKEN

const VZ = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/vectorize/v2/indexes/${CF_INDEX}`

function fileId(filename) {
  return 'wiki-' + createHash('sha256').update(filename).digest('hex').slice(0, 8)
}

function parseSections(filename, raw) {
  const text = raw.replace(/^---[\s\S]*?---\n?/, '')
  const parts = text.split(/(?=^## )/m)
  return parts
    .map(p => p.trim())
    .filter(p => p.length >= 30)
    .map((p, i) => ({ id: `${fileId(filename)}-${i}`, text: `【${filename.replace('.md', '')}】\n${p}` }))
}

async function embed(texts) {
  const results = []
  for (let i = 0; i < texts.length; i += 20) {
    const res = await fetch(`${EMB_BASE}/embeddings`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${EMB_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: EMB_MODEL, input: texts.slice(i, i + 20), dimensions: EMB_DIM }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(`Embedding error: ${JSON.stringify(data)}`)
    results.push(...data.data.sort((a, b) => a.index - b.index).map(d => d.embedding))
  }
  return results
}

async function vzDelete(ids) {
  if (!ids.length) return
  const res = await fetch(`${VZ}/delete-by-ids`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${CF_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(`Vectorize delete error: ${JSON.stringify(data.errors)}`)
}

async function vzUpsert(vectors) {
  if (!vectors.length) return 0
  const ndjson = vectors.map(v =>
    JSON.stringify({ id: v.id, values: v.values, metadata: { text: v.text, file: v.file } })
  ).join('\n')
  const res = await fetch(`${VZ}/upsert`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${CF_TOKEN}`, 'Content-Type': 'application/x-ndjson' },
    body: ndjson,
  })
  const data = await res.json()
  if (!data.success) throw new Error(`Vectorize upsert error: ${JSON.stringify(data.errors)}`)
  return data.result?.count ?? vectors.length
}

const index = existsSync(INDEX_FILE) ? JSON.parse(readFileSync(INDEX_FILE, 'utf-8')) : {}

let changed = [], deleted = []
if (Object.keys(index).length === 0) {
  changed = readdirSync(WIKI_DIR).filter(f => f.endsWith('.md')).map(f => join(WIKI_DIR, f))
} else {
  const c = execSync(`git diff --name-only --diff-filter=ACMR HEAD~1 HEAD -- ${WIKI_DIR}/`).toString().trim()
  changed = c ? c.split('\n').filter(f => f.endsWith('.md')) : []
  const d = execSync(`git diff --name-only --diff-filter=D HEAD~1 HEAD -- ${WIKI_DIR}/`).toString().trim()
  deleted = d ? d.split('\n').filter(f => f.endsWith('.md')) : []
}

if (!changed.length && !deleted.length) {
  console.log('无变更，跳过')
  process.exit(0)
}

await vzDelete([...changed, ...deleted].flatMap(f => index[basename(f)] || []))

let total = 0
for (const filepath of changed) {
  const filename = basename(filepath)
  const sections = parseSections(filename, readFileSync(filepath, 'utf-8'))
  if (!sections.length) continue
  const embeddings = await embed(sections.map(s => s.text))
  const vectors = sections.map((s, i) => ({ id: s.id, values: embeddings[i], text: s.text, file: filename }))
  const count = await vzUpsert(vectors)
  index[filename] = sections.map(s => s.id)
  total += count
  console.log(`${filename}: ${vectors.length} 块`)
}

for (const filepath of deleted) {
  delete index[basename(filepath)]
  console.log(`已删除: ${basename(filepath)}`)
}

writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2))
console.log(`完成，共导入 ${total} 条`)
