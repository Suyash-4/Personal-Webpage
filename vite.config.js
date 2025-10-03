// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 1. Alias the lottie-web import to use the correct ES module path.
  resolve: {
    alias: {
      "lottie-web": "lottie-web/build/player/lottie.js",
    },
  },

  // 2. Exclude the dependencies to prevent the "object is not extensible" compiler crash.
  optimizeDeps: {
    exclude: ["lenis/react", "lottie-react"],
  },
});
