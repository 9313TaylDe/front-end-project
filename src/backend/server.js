import express from "express";
import cors from "cors";
import authRoutes from "./auth.js"; // Certifique-se de que o caminho está correto

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Usando express.json() diretamente para parsear JSON

// Rotas
app.use("/api/auth", authRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
