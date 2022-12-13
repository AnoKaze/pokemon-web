import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: './auto-import.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  server: {
    host: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://192.168.25.133:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
