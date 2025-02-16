import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pustantaran-nepal/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
  },
});
