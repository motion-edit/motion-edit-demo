import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');

    // Check if the current mode is 'production' (which is used by `npm run build`)
    const isProduction = mode === 'production';
    
    return {
      // 🚨 FIX: Apply the subpath base ONLY when building for production
      // When running 'npm run dev' (mode is 'development'), it defaults to the root '/'
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      base: "/motion-edit-demo/",
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});