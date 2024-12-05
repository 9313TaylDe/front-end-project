import { Sequelize, DataTypes } from "sequelize";
import defineUserModel from "../models/Usuario.js"; // Importe a função para definir o modelo

// Configuração do Sequelize
const sequelize = new Sequelize("produtosTable", "root", "12345678", {
  host: "127.0.0.1",
  dialect: "mysql",
});

// Definir o modelo User usando a função exportada do arquivo de modelo
const User = defineUserModel(sequelize);

// Função de teste
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");

    // Sincronizar a tabela (use com cautela em produção)
    await User.sync({ force: true }); // `force: true` recria a tabela, útil para testes

    // Inserir dados
    const user1 = await User.create({
      firstname: "Tay",
      surname: "Paulo",
      email: "tay@example.com",
      password: "123456",
    });
    console.log("Usuário criado:", user1.toJSON());

    await User.create({
      firstname: "Tay",
      surname: "paulo",
      email: "tay@example.com",
      password: "321123",
    });

    const users = await User.getAllUsers();
    console.log(users.map((user) => user.toJSON()));

    await User.updateUserById(1, {
      firstname: "John",
      surname: "Doe",
      email: "john@example.com",
      password: "789012",
    });
    // Buscar dados
    const allUsers = await User.findAll();
    console.log(
      "Usuários no banco:",
      allUsers.map((u) => u.toJSON())
    );

    // Buscar um usuário por ID
    const userById = await User.findByPk(1);
    console.log(
      "Usuário encontrado por ID:",
      userById ? userById.toJSON() : "Não encontrado"
    );
  } catch (error) {
    console.error("Erro durante o teste:", error);
  } finally {
    await sequelize.close();
    console.log("Conexão encerrada.");
  }
})();
