import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Zmień na nazwę swojego repozytorium, jeśli różni się od "mobywatel-zbycie-pojazdu".
  base: '/mobywatel-zbycie-pojazdu/',
});
