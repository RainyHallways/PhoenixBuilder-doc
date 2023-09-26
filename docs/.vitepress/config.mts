import { withPwa } from "@vite-pwa/vitepress"
import process from "node:process"
import { defineConfig } from "vitepress"
import { pwa } from "./scripts/pwa"

const COMMIT_ID =
  process.env.CF_PAGES_COMMIT_SHA || process.env.COMMIT_REF || process.env.GITHUB_SHA || "local"
const commitRef = COMMIT_ID?.slice(0, 8)
const environment = process.env.DEPLOYMENT_STATUS || process.env.NODE_ENV

export default withPwa(
  defineConfig({
    title: "PhoenixBuilder-Doc",
    lang: "zh-CN",
    lastUpdated: true,
    description: "A third-party Doc website of PhoenixBuilder",
    head: [
      [
        'link',{ rel: 'icon', href: '/favicon.ico' }
      ]
    ],
    themeConfig: {
      lastUpdated: {
        text: "最后更新",
      },
      outlineTitle: "目录",
      logo: "/logo-brand.png",
      nav: [
        { text: "主页", link: "/" },
        { text: "简介", link: "/guide" },
        {
          text: "使用文档",
          activeMatch: "/docs/*",
          items: [
            { text: "安装教程", link: "/docs/install" },
            { text: "使用教程", link: "/docs/usage" },
          ],
        },
        {
          text: "报错解决",
          activeMatch: "/error/*",
          items: [
            { text: "常见报错及解决方法", link: "/error/common2solve" },
            { text: "未收录报错提交", link: "/contribute/crash-report" },
          ],
        },
        {
          text: "贡献",
          activeMatch: "/contribute/*",
          items: [
            { text: "文档贡献指南", link: "/contribute/contributing" },
            { text: "未收录报错提交", link: "/contribute/crash-report" },
          ],
        },
        { text: "小工具", link: "/tools/" },
        { text: "关于", link: "/about" },
        { text: "捐赠", link: "https://afdian.net/a/fbdoc" }
      ],

      footer: {
        message: `${environment}@<a href="https://github.com/RainyHallways/PhoenixBuilder-doc/commit/${commitRef}" target="_blank" alt=${commitRef}>${commitRef}</a><br />Released under the <a href="https://github.com/RainyHallways/PhoenixBuilder-doc/blob/main/LICENSE">GFDL License</a>.</a>`,
        copyright:
          'Copyright © 2023 <a href="https://github.com/RainyHallways">RainyHallways/雨廊</a>,All Rights Reserved.',
      },

      search: {
        provider: "algolia",
        options: {
          appId: "GGUSQ9MSDN",
          apiKey: "65f8f2aff85e6cd62f73b714e1ad5fcb",
          indexName: "PhoenixBuilder",
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },

      sidebar: [
        { text: "简介", link: "/guide" },
        {
          text: "使用文档",
          activeMatch: "/docs/*",
          items: [
            { text: "安装教程", link: "/docs/install" },
            { text: "使用教程", link: "/docs/usage" },
          ],
        },
        {
          text: "报错解决",
          activeMatch: "/error/*",
          items: [
            { text: "常见报错及解决方法", link: "/error/common2solve" },
            { text: "未收录报错提交", link: "/contribute/crash-report" },
          ],
        },
        {
          text: "贡献",
          activeMatch: "/contribute/*",
          items: [
            { text: "文档贡献指南", link: "/contribute/contributing" },
            { text: "未收录报错提交", link: "/contribute/crash-report" },
          ],
        },
        { text: "关于PhoenixBuilder", link: "/about" },
        { text: "小工具集锦", link: "/tools/" },
        { text: "捐赠", link: "https://afdian.net/a/fbdoc" }
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/RainyHallways/PhoenixBuilder-doc" }],

      editLink: {
        pattern: "https://github.com/RainyHallways/PhoenixBuilder-doc/edit/main/docs/:path",
        text: "在 GitHub 上帮助我们完善这个页面",
      },

      docFooter: {
        prev: "上一页",
        next: "下一页",
      },

      sidebarMenuLabel: "菜单",
      returnToTopLabel: "返回顶部",
      externalLinkIcon: true,
      darkModeSwitchLabel: "切换深色模式",
    },

    pwa,
  }),
)
