module.exports = {
    title: "uni-pocky-ui",
    description: "一个简单的uni的ui框架",
    logo: "/logo.png",
    dest: "./dist-docs",
    base: "/docs/",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/favicon.ico"
            }
        ]
    ],
    markdown: {
        // markdown - code 显示行数
        lineNumbers: true
    },
    themeConfig: {
        // 导航栏 logo
        logo: "/logo.png",

        // 导航栏
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "其他uni插件",
                items: [
                    {
                        text: "core",
                        link: "https://www.npmjs.com/package/uni-pocky-core"
                    },
                    {
                        text: "request",
                        link: "https://www.npmjs.com/package/uni-pocky-request"
                    },
                    {
                        text: "upx2px",
                        link: "https://www.npmjs.com/package/uni-pocky-upx2px"
                    }
                ]
            },
            {
                text: "语雀",
                link: "https://yuque.com/pocky"
            },
            {
                text: "GitHub",
                link: "https://github.com/2460392754/uni-pocky-ui"
            },
            {
                text: "NPM",
                link: "https://www.npmjs.com/package/uni-pocky-ui"
            }
        ],

        // 侧边栏
        sidebar: {
            "/views/": [
                "introduce",
                "install",
                "use",
                "logs",
                "theme",
                "color",
                "icon",
                "button",
                "nav",
                "card",
                "input",
                "textarea",
                "modal",
                "switch"
            ]
        },

        // sidebarDepth: 2,
        lastUpdated: "Last Updated",

        // 页面缓存
        serviceWorker: {
            updatePopup: true
        },

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: "vuejs/vuepress",
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: "查看源码",

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: "vuejs/vuepress",
        // 假如文档不是放在仓库的根目录下：
        docsDir: "docs",
        // 假如文档放在一个特定的分支下：
        docsBranch: "master",
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: "帮助我们改善此页面！"
    }
};
