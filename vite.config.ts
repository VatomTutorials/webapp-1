import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//
// Details at https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
