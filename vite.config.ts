import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@common': path.resolve(__dirname, './src/common'),
			'@theme': path.resolve(__dirname, './src/theme'),
		},
	},
	include: ['.eslintrc.cjs'],
});
