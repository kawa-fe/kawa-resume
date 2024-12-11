import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@kawa/foundation': path.resolve(__dirname, 'src/packages/kawa-foundation'),
      '@kawa/ui': path.resolve(__dirname, 'src/packages/kawa-ui')
    }
  }
})