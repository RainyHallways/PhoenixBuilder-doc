import type { VitePWAOptions } from "vite-plugin-pwa"

export const pwa: Partial<VitePWAOptions> = {
  outDir: ".vitepress/dist",
  registerType: "prompt",
  includeManifestIcons: false,
  manifest: {
    id: "/",
    name: "PhoenixBuilder 文档",
    short_name: "PhoenixBuilder 文档",
    description: "为一般玩家编写的 PhoenixBuilder 文档",
    theme_color: "#ffffff",
    start_url: "/",
    lang: "zh-CN",
    display: "standalone",
    categories: ["PhoenixBuilder","use","crash","panic"],
    icons: [
      {
        src: "favicon.ico",
        sizes: "144x144",
        type: "image/ico",
      }
    ],
  },
  workbox: {
    globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
    globIgnores: ["shortcuts/*.svg"],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "gstatic-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}
