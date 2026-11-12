import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Nazwa musi zgadzać się z nazwą repozytorium na GitHubie.
  base: '/mObywatelChallenge/',
});
