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
    // WP書き出し時
    outDir: '../local/app/public/wp-content/themes/index/',
    // emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'index') {
            return 'assets/js/main.js'
          }
          return `assets/js/[name].js`
        },
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name)
          if (assetInfo.name === 'index.css' || assetInfo.name === 'style.css') {
            return 'assets/css/style.css'
          }
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name][extname]`;
        },
      }
    }
  }
})