import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte()]
});