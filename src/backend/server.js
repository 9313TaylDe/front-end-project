import express from "express";
import cors from "cors"; // Middleware para habilitar CORS
import routes from "./routes.js"; // Importar as rotas
import fetch from "node-fetch"; // Para realizar requisições ao backend remoto

const app = express();

// Configuração de porta
const PORT = process.env.PORT || 4000;

// URL do backend remoto
const REMOTE_BACKEND_URL = "https://front-end-project-1npm-run.onrender.com";

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Permitir requisições do frontend
  })
);
app.use(express.json()); // Habilitar JSON nas requisições
app.use(routes);

// Rota principal
app.get("/", (req, res) => {
  res.send("API de login, registro e produtos");
});

// Endpoint para obter produtos com ID
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`${REMOTE_BACKEND_URL}/products/${id}`); // Requisição para o backend remoto
    const product = await response.json();

    if (response.ok) {
      res.status(200).json(product); // Retorna o produto encontrado
    } else {
      res.status(response.status).json(product); // Retorna o erro do backend remoto
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar produto", error: error.message });
  }
});

// Endpoint para listar produtos
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

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
