import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://lorryafriyie.github.io/news-homepage/",
  server: {
    port: 3001,
  },
});
