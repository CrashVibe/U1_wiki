import { defineConfig } from "vitepress";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import pkg from "../../package.json";
import { UnlazyImages } from "@nolebase/markdown-it-unlazy-img";
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
    vue: {
        template: {
            transformAssetUrls: {
                NolebaseUnlazyImg: ["src"]
            }
        }
    },
    lastUpdated: true,
    lang: "zh-CN",
    title: "U1 Wiki",
    description: "U1 项目的官方文档",
    ignoreDeadLinks: true,
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["script", { async: "", src: "/m.js" }],
        [
            "script",
            {
                async: "",
                defer: "true",
                src: "https://umami.crashvibe.cn/script.js",
                "data-domains": "u1.crashvibe.cn",
                "data-website-id": "ee24d993-b13b-4463-8802-88134404f783"
            }
        ]
    ],
    sitemap: {
        hostname: "https://u1.crashvibe.cn"
    },
    themeConfig: {
        search: {
            provider: "local"
        },
        logo: { src: "/logo.svg", width: 28, height: 28 },
        editLink: {
            pattern: "https://github.com/CrashVibe/U1_wiki/edit/main/docs/:path"
        },
        nav: [
            { text: "主界面   ", link: "/" },
            { text: "百科", link: "/intro" },
            {
                text: "关于",
                items: [
                    { text: "联系我们", link: "/about/contact" },
                    { text: "认识成员", link: "/about/team" },
                    { text: "赞助列表", link: "/others/sponsors" }
                ]
            }
        ],

        sidebar: [
            {
                text: "教程",
                items: [
                    { text: "👋 欢迎来到 U1 Wiki", link: "/intro" },
                    { text: "🕰️ 更新日志", link: "/changelog" },
                    { text: "🌹 FAQ", link: "/FAQ" },
                    { text: "📘 项目介绍", link: "/jieshao" },
                    {
                        text: "✨ 姚奕功能介绍",
                        items: [
                            { text: "钓鱼 🔥", link: "/yaoyi-func/钓鱼" },
                            { text: "今日运势 🔥", link: "/yaoyi-func/今日运势" },
                            { text: "娶群友", link: "/yaoyi-func/娶群友" },
                            { text: "回声洞", link: "/yaoyi-func/回声洞" },
                            { text: "次元币", link: "/yaoyi-func/次元币" },
                            { text: "成分姬", link: "/yaoyi-func/成分姬" },
                            { text: "答案之书", link: "/yaoyi-func/答案之书" },
                            { text: "今天吃什么", link: "/yaoyi-func/今天吃什么" },
                            { text: "历史上的今天", link: "/yaoyi-func/历史上的今天" },
                            { text: "天气", link: "/yaoyi-func/天气" },
                            { text: "网抑云", link: "/yaoyi-func/网抑云" },
                            { text: "网易云点歌", link: "/yaoyi-func/网易云点歌" },
                            { text: "塔罗牌", link: "/yaoyi-func/塔罗牌" },
                            { text: "早晚安", link: "/yaoyi-func/早晚安" }
                        ]
                    },
                    {
                        text: "🎒 其他",
                        items: [
                            { text: "赞助列表", link: "/others/sponsors" },
                            { text: "如何贡献", link: "/others/support" },
                            { text: "联系我们", link: "/about/contact" },
                            { text: "开发团队", link: "/about/team" }
                        ]
                    }
                ]
            }
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/CrashVibe/U1_wiki" }],
        footer: {
            message: `基于 GPL-3.0 license 许可发布 | 文档版本 ${pkg.version}`,
            copyright: `版权所有 © 2023-${new Date().getFullYear()} U1`
        },
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式"
    },
    markdown: {
        config: (md) => {
            md.use(UnlazyImages(), {
                imgElementTag: "NolebaseUnlazyImg"
            });
            md.use(BiDirectionalLinks());
            md.use(timeline);
            md.use(InlineLinkPreviewElementTransform);
        },

        container: {
            tipLabel: "提示",
            warningLabel: "警告",
            dangerLabel: "危险",
            infoLabel: "信息",
            detailsLabel: "详细信息"
        }
    }
});