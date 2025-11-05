import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para Netlify, usa '/' o déjalo vacío
  base: '/',
  build: {
    // Optimizaciones para Netlify
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true
  }
});