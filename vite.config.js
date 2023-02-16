import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  build: {
    manifest: true,
    outDir: 'assets/index',
},
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
  },
  
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    resolve: {
      alias: {
          '@': '/jsx',
          '~': '/js',
      }
  }
  },
})
