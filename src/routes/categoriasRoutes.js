import express from "express";

const router = express.Router();

export default (Category) => {
  // Criar uma nova categoria
  router.post("/categorias", async (req, res) => {
    try {
      console.log("Dados recebidos:", req.body);
      const { name, slug, use_in_menu } = req.body;
      const category = await Category.create({ name, slug, use_in_menu });
      res.status(201).json(category);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      res.status(500).json({ error: "Erro ao criar categoria" });
    }
  });

  // Obter todas as categorias
  router.get("/", async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      res.status(500).json({ error: "Erro ao buscar categorias" });
    }
  });

  // Obter uma categoria por ID
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      res.status(200).json(category);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      res.status(500).json({ error: "Erro ao buscar categoria" });
    }
  });

  // Atualizar uma categoria por ID
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, slug, use_in_menu } = req.body;

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      await category.update({ name, slug, use_in_menu });
      res.status(200).json(category);
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      res.status(500).json({ error: "Erro ao atualizar categoria" });
    }
  });

  // Excluir uma categoria por ID
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      await category.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
      res.status(500).json({ error: "Erro ao excluir categoria" });
    }
  });

  return router;
};
