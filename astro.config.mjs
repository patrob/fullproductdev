import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fullproductdev.example.com",
  integrations: [sitemap()],
});

