import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    }
  }
})

// import { configDefaults, defineConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';
// import path from "path";
//
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     exclude: [...configDefaults.exclude, 'src/__e2e__/*'],
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src/"),
//     }
//   }
// });