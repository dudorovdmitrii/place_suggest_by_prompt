import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  html: {
    title: "Нейрокомпьютерные системы",
  },
  plugins: [pluginReact()],
  server: {
    proxy: {
      "/api": "http://localhost:8088",
    },
  },
});
