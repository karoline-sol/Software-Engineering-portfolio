import {  defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  console.table(isProd)
  const githubPath = process.env.GITHUB_WORKSPACE;

  return {
    base: isProd ? '/Software-Engineering-portfolio/' : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '~': isProd ? `${githubPath}/my-portfolio/src` : '/my-portfolio/src'
      }
    }
  }
})
