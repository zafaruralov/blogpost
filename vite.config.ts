import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: "vue/dist/vue.esm-bundler"
    }
  },
  optimizeDeps: {
    include: ["@tinymce/tinymce-vue", "tinymce"]
  },
  server: {
    port: 4000,
    proxy: {
      "/posts": {
        changeOrigin: true,
        target: "http://localhost:3000"
      }
    }
  }
});
