import express from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const db = require("./db.json");
const routes = express.Router();
routes.get("/products", (req, res) => {
  console.log(db.produtos); // Verifique se os dados estão sendo carregados corretamente
  res.json(db.produtos || []); // Garanta que pelo menos um array vazio seja retornado
});
routes.get("/categorias", (req, res) => {
  console.log(db.produtos); // Verifique se os dados estão sendo carregados corretamente
  res.json(db.produtos || []); // Garanta que pelo menos um array vazio seja retornado
});

routes.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = db.produtos.find((prod) => prod.id === parseInt(id));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

routes.post("/login", (req, res) => {
  const { id, email, password } = req.body;
  console.log("login suceddo");
  res.status(200).send("Login realizado com sucesso!");
});

routes.post("/register", (req, res) => {
  res.status(200).send("Cadastro");
});

export default routes;
