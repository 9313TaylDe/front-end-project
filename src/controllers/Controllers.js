import Usuario from "../models/Usuario";
// Função para obter todos os usuários
const getUsuarios = (req, res) => {
  Usuario.findAll()
    .then((usuarios) => res.json(usuarios))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Função para criar um novo usuário
const createUsuario = (req, res) => {
  Usuario.create(req.body)
    .then((usuario) => res.status(201).json(usuario))
    .catch((err) => res.status(400).json({ error: err.message }));
};

// Exportando as funções
module.exports = {
  getUsuarios,
  createUsuario,
};
