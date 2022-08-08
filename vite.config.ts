import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  
  plugins: [solidPlugin()],
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.1.164:5000/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
