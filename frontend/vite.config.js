import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    include: ["tests/**/*.{test,spec}.{js,jsx,ts,tsx}"],
  },
});
