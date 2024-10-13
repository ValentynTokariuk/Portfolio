import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Use this if the site is hosted in a subdirectory
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.key']
})
