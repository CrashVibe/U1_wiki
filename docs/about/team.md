---
layout: page
title: 认识团队
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const coreMembers = [
  {
    avatar: 'https://github.com/wling-art.png',
    name: 'MrlingXD',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/wling-art' }
    ],
    sponsor: 'https://afdian.com/a/wling',
    actionText: '捐赠作者'
  }
]
</script>

<VPTeamPage class="sponsors-page">
  <VPTeamPageTitle>
    <template #title>
      认识团队
    </template>
    <template #lead>
      在这个页面你将了解为项目做出贡献的人
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection  class="sponsors-section">
    <template #title>管理团队</template>
    <template #lead>这是目前是 U1 的管理团队，感谢他们让 U1 更美好！</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<style scoped>
.sponsors-page {
  margin: 0 0 2.5rem 0;
}
</style>
