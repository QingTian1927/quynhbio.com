import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import db from "@astrojs/db";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.quynhbio.com",
  server: {
    port: 6969,
    host: true
  },
  markdown: {
    syntaxHighlight: false
  },
  i18n: {
    defaultLocale: "vi",
    locales: ["en", "vi"]
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),

  integrations: [
    tailwind(),
    vue(),
    db(),
    sitemap({
      i18n: {
        defaultLocale: "vi",
        locales: {
          en: "en-US",
          vi: "vi-VN",
        }
      }
    }),
  ],
});