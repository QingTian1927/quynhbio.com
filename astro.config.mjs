import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import db from "@astrojs/db";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), db()],

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
});