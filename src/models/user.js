"use strict";
const bcrypt = require("bcrypt");

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users", // Nome da tabela no banco de dados
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true, // Vai adicionar as colunas created_at e updated_at automaticamente
    }
  );

  // Hook para hash da senha antes de criar o usuário
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  // Corrigido: Retornar o modelo User
  return User;
};
