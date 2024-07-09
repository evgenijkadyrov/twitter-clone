import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	build: { chunkSizeWarningLimit: 2500 },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@common': path.resolve(__dirname, './src/common'),
			'@/style': path.resolve(__dirname, './src/style'),
		},
	},
	assetsInclude: ['.eslintrc.cjs'],
});
