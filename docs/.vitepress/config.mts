import { defineConfig } from "vitepress";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import pkg from "../../package.json";
import { UnlazyImages } from "@nolebase/markdown-it-unlazy-img";
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";

export default defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        NolebaseUnlazyImg: ["src"],
      },
    },
  },
  lastUpdated: true,
  lang: "zh-CN",
  title: "U1 Wiki",
  description: "U1 项目的官方文档",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { async: "", src: "/m.js" }],
    ["script", { async: "true", src: "/cursor.js" }],
  ],
  sitemap: {
    hostname: "https://u1.crashvibe.cn",
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo.svg", width: 28, height: 28 },
    editLink: {
      pattern: "https://github.com/CrashVibe/U1_wiki/edit/main/docs/:path",
    },
    nav: [
      { text: "主界面   ", link: "/" },
      { text: "百科", link: "/intro" },
      {
        text: "关于",
        items: [
          { text: "📃 关于我们", link: "/about/intro" },
          { text: "🤗 认识成员", link: "/about/team" },
          { text: "❤️ 赞助列表", link: "/about/sponsors" },
          { text: "☎️ 联系我们", link: "/about/contact" },
        ],
      },
    ],

    sidebar: [
      {
        text: "教程",
        items: [
          { text: "👋 欢迎来到 U1 Wiki", link: "/intro" },
          { text: "🌹 FAQ", link: "/FAQ" },
          { text: "📘 项目介绍", link: "/jieshao" },
          {
            text: "✨ 姚奕功能介绍",
            items: [
              { text: "娶群友", link: "/yaoyi-func/娶群友" },
              { text: "钓鱼 🔥", link: "/yaoyi-func/钓鱼" },
              { text: "今日运势 🔥", link: "/yaoyi-func/今日运势" },
              { text: "成分姬", link: "/yaoyi-func/成分姬" },
              { text: "答案之书", link: "/yaoyi-func/答案之书" },
              { text: "疯狂星期四", link: "/yaoyi-func/疯狂星期四" },
              { text: "回声洞", link: "/yaoyi-func/回声洞" },
              { text: "今天吃什么", link: "/yaoyi-func/今天吃什么" },
              { text: "历史上的今天", link: "/yaoyi-func/历史上的今天" },
              { text: "天气", link: "/yaoyi-func/天气" },
              { text: "网抑云", link: "/yaoyi-func/网抑云" },
              { text: "网易云点歌", link: "/yaoyi-func/网易云点歌" },
              { text: "表情包制作", link: "/yaoyi-func/表情包制作" },
              { text: "Github Card", link: "/yaoyi-func/Github Card" },
              { text: "塔罗牌", link: "/yaoyi-func/塔罗牌" },
              { text: "运行状态", link: "/yaoyi-func/运行状态" },
            ],
          },
          {
            text: "其他",
            items: [{ text: "❤ 支持我们", link: "/others/support" }],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/CrashVibe/U1_wiki" },
    ],
    footer: {
      message: `基于 GPL-3.0 license 许可发布 | 文档版本 ${pkg.version}`,
      copyright: `版权所有 © 2023-${new Date().getFullYear()} U1`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  markdown: {
    config: (md) => {
      md.use(UnlazyImages(), {
        imgElementTag: "NolebaseUnlazyImg",
      });
      md.use(BiDirectionalLinks());
      md.use(InlineLinkPreviewElementTransform);
    },

    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
});
