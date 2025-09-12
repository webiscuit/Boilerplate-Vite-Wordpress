import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

const options = { pretty: true }
const locals = { name: "My Pug" }

export default defineConfig({
  root: 'src',
  base: './',
  plugins: [pugPlugin(options, locals)],
  server: {
    watch: {
      usePolling: true,
    }
  },
  build: {
    outDir: '../dist',
    // emptyOutDir: true
  }
})