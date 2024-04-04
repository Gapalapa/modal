import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import pugPlugin from 'vite-plugin-pug'
import tailwindcss from 'tailwindcss'
import WindiCSS from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pugPlugin({
      pretty: true,
      handler: true
    }),
    WindiCSS(),
    tailwindcss('./tailwind.config.js'),
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, './src/main.js'),
      output: {
        dir: resolve(__dirname, 'dist'),
        entryFileNames: 'index.js',
        chunkFileNames: '[name]-[hash].js',
      },
    },
  },
});
