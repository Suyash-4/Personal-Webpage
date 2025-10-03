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

  // FIX: This configuration section tells Vite/Rollup to exclude specific dependencies
  // from its internal optimization process. This prevents the "Cannot add property 0,
  // object is not extensible" error caused by Rollup trying to mutate frozen objects
  // inside these external libraries (like lenis/react or lottie-react).
  optimizeDeps: {
    exclude: [
      // Exclude the libraries known to cause Rollup build errors
      "lenis/react",
      
    ],
  },
});
