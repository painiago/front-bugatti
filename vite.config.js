import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
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
