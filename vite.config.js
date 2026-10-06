import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // GitHub Pages serves this under /nchito-nchito-redesign/.
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/nchito-nchito-redesign/' : '/'),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4302,
    host: '0.0.0.0',
  },
  preview: {
    port: 4302,
    host: '0.0.0.0',
  },
})
