import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    hmr: {
      overlay: true,
    },
    proxy: {
      '/api/waitlist': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/waitlist/, '/forms/d/e/1FAIpQLSfqqaFxJvirBAT3tn6JeELA_DzjlCRytQww3HzfEJNo1kKLGw/formResponse')
      },
      '/api/newsletter': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/newsletter/, '/forms/d/e/1FAIpQLSdTpqBqtljF654WnIQV0D7MAxG1OzMU02dAITHLNf2BmrGJew/formResponse')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})