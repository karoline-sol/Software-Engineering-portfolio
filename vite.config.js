import {  defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: '/',
    plugins: [react()]  [tailwindcss()],
    resolve: {
      alias: {
        '~': isProd ? 'Software-Engineering-portfolio/my-portfolio/src' : '/my-portfolio/src'
      }
    }
  }
})
