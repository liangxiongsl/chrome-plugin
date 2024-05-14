import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), copy({
    targets: [
      {src: 'src/manifest.json', dest: 'dist'},
      {src: 'src/icons', dest: 'dist'},
      {src: 'src/scripts/service-worker.js', dest: 'dist/scripts'},
      {src: 'src/ui/options/options.html', dest: 'dist/ui/options'},
      {src: 'src/ui/popup/popup.html', dest: 'dist/ui/popup'},
      {src: 'src/ui/side-panel/side-panel.html', dest: 'dist/ui/side-panel'},
    ],
    copyOnce: false
  })],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    // https://rollupjs.org/configuration-options/
    rollupOptions: {
      input: {
        'scripts/content/content-script': 'src/scripts/content/content-script.js',
        'ui/options/options': 'src/ui/options/options.js',
        'ui/popup/popup': 'src/ui/popup/popup.js',
        'ui/side-panel/side-panel': 'src/ui/side-panel/side-panel.js',
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    // https://rollupjs.org/configuration-options/#watch
    watch: {
      include: 'src/**'
    }
  }
})
