import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

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
      dts: './auto-import.d.ts'
		}),
		Components({
			dirs: ['src/components'],
		})
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
