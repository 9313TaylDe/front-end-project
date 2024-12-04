import express from "express";
import cors from "cors"; // Middleware para habilitar CORS
import axios from "axios"; // Biblioteca para requisições HTTP

const routes = express.Router();

// Middleware de CORS para permitir requisições de origens diferentes
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Substitua com o URL do seu frontend em produção
  methods: "GET,POST",
};

const app = express();
const PORT = process.env.PORT || 3000; // Usando o port fornecido pelo Railway ou localmente

// Middleware
app.use(cors(corsOptions)); // Permitir requisições de outras origens
app.use(express.json()); // Permitir que o corpo da requisição seja em JSON
app.use(routes);

// URL base do backend
const BASE_URL = "https://front-end-project-1npm-run.onrender.com/";

// Rota principal
app.get("/", (req, res) => {
  res.send("API de login, registro e produtos");
});

// Rota para obter produtos
routes.get("/products", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}products`);
    console.log(response.data); // Log dos produtos para depuração
    res.json(response.data || []); // Retornar os produtos ou um array vazio
  } catch (error) {
    console.error("Erro ao obter produtos:", error.message);
    res.status(500).json({ message: "Erro ao buscar produtos do backend." });
  }
});

// Rota para obter categorias (separar caso haja endpoint dedicado)
routes.get("/categorias", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}categorias`);
    console.log(response.data); // Log das categorias para depuração
    res.json(response.data || []); // Retornar as categorias ou um array vazio
  } catch (error) {
    console.error("Erro ao obter categorias:", error.message);
    res.status(500).json({ message: "Erro ao buscar categorias do backend." });
  }
});

// Rota para obter um produto específico por ID
routes.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}products/${id}`);
    if (response.data) {
      res.status(200).json(response.data); // Retornar o produto encontrado
    } else {
      res.status(404).json({ message: "Produto não encontrado" }); // Caso o produto não exista
    }
  } catch (error) {
    console.error("Erro ao obter produto:", error.message);
    res.status(500).json({ message: "Erro ao buscar o produto do backend." });
  }
});

// Rota de login
routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login realizado com sucesso");
  res.status(200).send("Login realizado com sucesso!");
});

// Rota de cadastro
routes.post("/register", (req, res) => {
  // Lógica de cadastro aqui
  res.status(200).send("Cadastro realizado com sucesso!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default routes;
