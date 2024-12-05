import express from "express";
import { Sequelize } from "sequelize";
import defineProductModel from "../models/tabelaProdutos.js";
import productRoutes from "../routes/produtosRoutes.js";
import Category from "../models/tabelaCategoria.js";
import categoryRoutes from "../routes/categoriasRoutes.js";
const app = express();
const PORT = 3005;

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: "mysql", // Ou 'postgres', 'sqlite', etc.
  host: "localhost", // Ou o host do seu banco de dados
  username: "root", // Seu usuário
  password: "12345678", // Sua senha
  database: "produtosTable", // Nome do seu banco
});

sequelize
  .authenticate()
  .then(() => console.log("Conexão bem-sucedida com o banco de dados"))
  .catch((error) => console.error("Erro ao conectar ao banco:", error));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Recebido, ${req.method} ${req.url}`);
  console.log("Body:", req.body);
  next();
});

const Product = defineProductModel(sequelize);

app.use("/api/categorias", categoryRoutes(Category));
app.use("/api/products", productRoutes(Product));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

app
  .listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Erro: A porta ${PORT} já está em uso.`);
      process.exit(1); // Finaliza o processo com erro
    }
  });
