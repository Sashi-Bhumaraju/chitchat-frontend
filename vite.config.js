import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
              src:"/logo192.png",
              sizes:"192x192",
              type:"image/png"
          },
  
          {
              src:"/logo256.png",
              sizes:"256x256",
              type:"image/png"
          },
          {
              src:"/logo384.png",
              sizes:"384x384",
              type:"image/png"
          },
          {
              src:"/logo512.png",
              sizes:"512x512",
              type:"image/png",
              purpose:"any maskable"
          }]
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/api");
          },
          handler: "CacheFirst" ,
          options: {
            cacheName: "api-cache",
            cacheableResponse: { 
              statuses: [0,200]
            }
          }
        }]
      }
    })
  ],
  build: {
    outDir: 'build', // Replace 'custom-dist' with your desired folder name
  },
})
