import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Rediet Sharew | Full-Stack Developer',
        short_name: 'Rediet',
        description: 'Personal portfolio of Rediet Sharew - Full-Stack Developer & Software Engineering Student',
        theme_color: '#6366f1',
        background_color: '#0f0f23',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.github\.com\/.*/i,
            handler: 'NetworkFirst',
            options: { cacheName: 'github-api', expiration: { maxAgeSeconds: 3600 } }
          }
        ]
      }
    })
  ]
})
