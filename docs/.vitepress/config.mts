import { withPwa } from "@vite-pwa/vitepress"
import process from "node:process"
import { defineConfig } from "vitepress"
import { pwa } from "./scripts/pwa"

const COMMIT_ID = process.env.CF_PAGES_COMMIT_SHA || process.env.COMMIT_REF
const commitRef = COMMIT_ID?.slice(0, 8)

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
        { text: "关于PhoenixBuilder", link: "/about" },
        { text: "捐赠支持本站", link: "https://afdian.net/a/fbdoc" }
      ],

      footer: {
        message: `Released under the <a href="https://github.com/RainyHallways/PhoenixBuilder-doc/blob/main/LICENSE">GFDL License</a>.</a>`,
        copyright:
          'Copyright © 2023 <a href="https://github.com/RainyHallways">RainyHallways/雨廊</a>,All Rights Reserved.',
      },

      search: {
        provider: 'local',
        options: {
          locales: {
            zh: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档',
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                  },
                },
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
        { text: "捐赠支持本站", link: "https://afdian.net/a/fbdoc" }
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
