import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-slidedown'], // Include react and react-dom as external dependencies
      output: {
        globals: {
          react: 'React', // Provide global variables for React and react-dom
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
