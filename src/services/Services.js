// arquivo UsuariosServices.js
import Usuario from "../models/Usuario.js";
import bcrypt from "./bcrypt";
// Função para obter todos os usuários
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter usuários." });
  }
};

// Função para criar um novo usuário
const createUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Verifica se o email já está em uso
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: "Email já está em uso." });
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedSenha = await bcrypt.hash(senha, salt);

    // Criação do novo usuário
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: hashedSenha,
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
};

module.exports = {
  getUsuarios,
  createUsuario,
};
