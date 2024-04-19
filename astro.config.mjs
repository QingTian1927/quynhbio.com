import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: "https://www.quynhbio.com",
  server: { port: 6969, host: true },

  markdown: {
    syntaxHighlight: false,
  }
});