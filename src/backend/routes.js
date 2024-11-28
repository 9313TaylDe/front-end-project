import express from "express";
const routes = express.Router();

// Definir suas rotas API no backend

routes.post("/login", (req, res) => {
  const { id, email, password } = req.body;
  console.log("login suceddo");
  res.status(200).send("Login realizado com sucesso!");
});

routes.post("/register", (req, res) => {
  res.status(200).send("Cadastro");
});

export default routes;
