/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// we need to create this file because at this time in Remix v2.8.1 vitest doesn't work well in the vite.config.ts
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom",
  },
});
