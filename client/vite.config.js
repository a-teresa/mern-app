import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
          target:'http://localhost:8000',
          //target:'/',
          secure:false,
      },
    },
  },
  plugins: [react()],
})