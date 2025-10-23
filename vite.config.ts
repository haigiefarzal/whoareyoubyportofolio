import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/whoareyoubyportofolio/', // ← ini penting, sama persis dengan nama repo kamu
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
