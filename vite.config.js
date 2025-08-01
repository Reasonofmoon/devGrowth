import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          radix: ['@radix-ui/react-tabs', '@radix-ui/react-checkbox', '@radix-ui/react-progress'],
          charts: ['recharts']
        }
      }
    }
  },
  base: '/devGrowth/'
})