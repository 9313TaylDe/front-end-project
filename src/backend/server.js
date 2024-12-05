import express from "express";
import { Sequelize } from "sequelize";
import defineProductModel from "../models/tabelaProdutos.js";
import productRoutes from "../routes/produtosRoutes.js";
import defineCategoryModel from "../models/tabelaCategoria.js";
import categoryRoutes from "../routes/categoriasRoutes.js";

const app = express();
const PORT = process.env.Port || 3000;

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: "mysql", // Ou 'postgres', 'sqlite', etc.
  host: "localhost", // Ou o host do seu banco de dados
  username: "root", // Seu usuário
  password: "12345678", // Sua senha
  database: "produtosTable", // Nome do seu banco
});

// Teste de conexão com o banco de dados
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

// Definindo os modelos e rotas
const Product = defineProductModel(sequelize);
const Category = defineCategoryModel(sequelize);
app.use("/api/categorias", categoryRoutes(Category));
app.use("/api/products", productRoutes(Product));

// Sincronizando os modelos com o banco e iniciando o servidor
sequelize.sync({ force: false }).then(() => {
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
});
