import express from "express";
import cors from "cors"; // Middleware para habilitar CORS
import fetch from "node-fetch"; // Para requisições ao backend remoto

const app = express();

// Configuração de porta
const PORT = process.env.PORT || 4000;

// URL do backend remoto
const REMOTE_BACKEND_URL = "https://front-end-project-1npm-run.onrender.com";

// Middleware
app.use(
  cors({
    origin: "https://front-end-gtech.netlify.app", // Permitir requisições do frontend hospedado no Netlify
  })
);
app.use(express.json()); // Habilitar JSON nas requisições

// Endpoint para obter produtos
app.get("/products", async (req, res) => {
  try {
    const response = await fetch(`${REMOTE_BACKEND_URL}/products`); // Requisição para o backend remoto
    const products = await response.json();

    if (response.ok) {
      res.status(200).json(products); // Retorna os produtos encontrados
    } else {
      res.status(response.status).json(products); // Retorna o erro do backend remoto
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar produtos", error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
