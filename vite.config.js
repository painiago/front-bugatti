import { defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import { resolte, resolve as _resolve } from 'path';
import path from 'path';
// https://vitejs.dev/config/

export default defineConfig({
  baseDirectory: "/dist",
  plugins: [react()],
  resolverr: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    commonjsOptions: {
      include: [ /node_modules/]
    },
  },
  
});


