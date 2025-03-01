import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
  server :{
    port:  3000//this should be the default port
    }
    ,
    proxy:{
      '/api': {
      target: 'http://localhost:8000', // Backend server
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
      
      }
    } 
})
