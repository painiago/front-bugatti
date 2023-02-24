import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: [
    { find: '@/', replacement: '/src' },
    { find: '@/', replacement: '/src/assets' },
    { find: 'views', replacement: '/src/views' },
    { find: 'components', replacement: '/src/components' },

  ]
})
