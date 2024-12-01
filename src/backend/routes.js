import express from "express";
const routes = express.Router();

import db from "./db.json" assert { type: "json" };

routes.get("/products", (req, res) => {
  console.log(db.produtos); // Verifique se os dados estão sendo carregados corretamente
  res.json(db.produtos || []); // Garanta que pelo menos um array vazio seja retornado
});
routes.get("/categorias", (req, res) => {
  console.log(db.produtos); // Verifique se os dados estão sendo carregados corretamente
  res.json(db.produtos || []); // Garanta que pelo menos um array vazio seja retornado
});

routes.get("/products/:id", (req, res) => {
  const { id } = req.params; // Pega o parâmetro `id` da URL
  const product = db.produtos.find((prod) => prod.id === parseInt(id)); // Garanta que o ID seja comparado corretamente

  if (product) {
    res.status(200).json(product); // Retorna o produto encontrado
  } else {
    res.status(404).json({ message: "Produto não encontrado" }); // Caso o produto não exista
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
