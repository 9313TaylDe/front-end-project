// src/server.js ou src/app.js
import express from "express";
const router = express.Router();
import userRoutes from "./usuarioRoutes.js";
import categoryRoutes from "./categoriasRoutes.js";
import productRoutes from "./produtosRoutes.js";

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

export default router;
