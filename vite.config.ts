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
      '/blog': {
        target: 'http://35.207.229.184',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})