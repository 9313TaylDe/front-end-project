import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Certifique-se de que o plugin react está aqui
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Certifique-se de que o proxy esteja apontando para o backend correto
    },
  },
});
