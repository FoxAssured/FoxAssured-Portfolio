import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base must be '/' when using a custom domain (CNAME) on GitHub Pages
  base: '/', 
  build: {
    outDir: 'dist',
  },
});