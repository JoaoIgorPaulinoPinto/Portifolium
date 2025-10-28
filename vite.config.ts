import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // <--- importante para SPA no Vercel
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
