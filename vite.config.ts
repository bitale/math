import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    strictPort: false,
    // ngrok 등 외부 도메인에서 접속 허용
    allowedHosts: [
      ".ngrok-free.dev",
      ".ngrok-free.app",
      ".ngrok.io",
      ".ngrok.app",
    ],
    // HMR(핫 리로드) 가 ngrok HTTPS 를 통해 동작하도록
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
  },
});
