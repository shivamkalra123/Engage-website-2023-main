import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  publicDir: "public", // Directory for static assets
  build: {
    outDir: "dist", // Specify the output directory
    sourcemap: true, // Generate source maps for easier debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Optional: Split vendor code for optimization
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    port: 3000, // Change the dev server port if needed
    open: true, // Open browser automatically on server start
  },
});
