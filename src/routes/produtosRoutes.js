import express from "express";

const router = express.Router();

export default (Product) => {
  // Criar produto
  router.post("/", async (req, res) => {
    try {
      const { name, description, price, category_id } = req.body;
      const product = await Product.create({
        name,
        description,
        price,
        category_id,
      });
      res.status(201).json(product);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  });

  // Obter todos os produtos
  router.get("/", async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  });

  // Obter produto por ID
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      res.status(500).json({ error: "Erro ao buscar produto" });
    }
  });

  // Atualizar produto por ID
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price, category_id } = req.body;
      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      await product.update({ name, description, price, category_id });
      res.status(200).json(product);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  });

  // Excluir produto por ID
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      await product.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      res.status(500).json({ error: "Erro ao excluir produto" });
    }
  });

  return router;
};
