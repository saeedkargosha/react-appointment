/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@uikit': path.resolve(__dirname, './src/uikit'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [svgr(), react()],
  test: {
    environment: 'jsdom',
  },
});
