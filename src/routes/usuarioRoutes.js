import express from "express";
import bcrypt from "bcryptjs"; // Para criptografar senhas

const router = express.Router();

export default (User) => {
  // Criar usuário
  router.post("/", async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
      res.status(201).json(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  });

  // Obter todos os usuários
  router.get("/", async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  });

  // Obter usuário por ID
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  });

  // Atualizar usuário por ID
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password, role } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      // Atualizar senha se fornecida
      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : user.password;

      await user.update({ name, email, password: hashedPassword, role });
      res.status(200).json(user);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  });

  // Excluir usuário por ID
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      await user.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      res.status(500).json({ error: "Erro ao excluir usuário" });
    }
  });

  return router;
};
