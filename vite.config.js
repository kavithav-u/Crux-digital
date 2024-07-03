// 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-dom', 'react-icons/fa'], // Add any other external modules here
    },
  },
});
