import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import produtos from "../models/produtos.js";
import mysql from "mysql2";
import axios from "axios";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//MIDDLEWARE
app.use(cors());

//ROTAS
app.get("/", (req, res) => {
  res.send("Servidor está funcionando...");
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

const fetchProdutos = async () => {
  try {
    const response = await axios.get(process.env.JSON_URL);
    return response.data;
  } catch (err) {
    console.error("Erro ao buscar os dados do JSON", err.message);
    throw new Error("Não foi possivel encontrar os dados do JSON on-line");
  }
};

// Rota para obter todos os produtos
app.get("/produtos", async (req, res) => {
  try {
    const produtos = await fetchProdutos();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para obter um produto específico por ID
app.get("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const produtos = await fetchProdutos();
    const produto = produtos.find((p) => p.id === parseInt(id));
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);

  console.log(
    `Acesse na rede local  pelo IP da máquina: http://<seu-ip>:${port}`
  );
});
