import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte()]
});