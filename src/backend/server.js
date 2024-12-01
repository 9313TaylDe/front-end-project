import express from "express";
import cors from "cors"; // Middleware para habilitar CORS
import routes from "./routes.js";
import user from "../models/user.js";
const { User } = user;
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permitir requisições de outras origens
app.use(express.json()); // Habilitar JSON nas requisições
app.use(routes);

// Rota principal
app.get("/", (req, res) => {
  res.send("API de login e registro");
});

app.get("/", routes);
// Endpoint para produtos com ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params; // Pega o parâmetro `id` da URL
  const product = db.produtos.find((prod) => prod.id === parseInt(id)); // Garanta que o ID seja comparado corretamente

  if (product) {
    res.status(200).json(product); // Retorna o produto encontrado
  } else {
    res.status(404).json({ message: "Produto não encontrado" }); // Caso o produto não exista
  }
});

routes.get("/products", (req, res) => {
  console.log("Produtos carregados:", db.produtos); // Exibir no console os produtos carregados
  res.json(db.produtos || []); // Retorna um array vazio caso produtos esteja indefinido
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(
  cors({
    origin: "http://localhost:5173", // Apenas esta origem será permitida
  })
);
