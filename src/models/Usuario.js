import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";

export default (sequelize) => {
  class User extends Model {
    /**
     * Método para criar um novo usuário
     */
    static async createUser(data) {
      try {
        const user = await this.create(data);
        return user;
      } catch (error) {
        throw new Error("Erro ao criar usuário: " + error.message);
      }
    }

    /**
     * Método para buscar todos os usuários
     */
    static async getAllUsers() {
      try {
        const users = await this.findAll();
        return users;
      } catch (error) {
        throw new Error("Erro ao buscar usuários: " + error.message);
      }
    }

    /**
     * Método para buscar um usuário por ID
     */
    static async getUserById(id) {
      try {
        const user = await this.findByPk(id);
        if (!user) {
          throw new Error("Usuário não encontrado");
        }
        return user;
      } catch (error) {
        throw new Error("Erro ao buscar usuário: " + error.message);
      }
    }

    /**
     * Método para atualizar um usuário por ID
     */
    static async updateUserById(id, data) {
      try {
        const user = await this.findByPk(id);
        if (!user) {
          throw new Error("Usuário não encontrado");
        }
        await user.update(data);
        return user;
      } catch (error) {
        throw new Error("Erro ao atualizar usuário: " + error.message);
      }
    }

    /**
     * Método para deletar um usuário por ID
     */
    static async deleteUserById(id) {
      try {
        const user = await this.findByPk(id);
        if (!user) {
          throw new Error("Usuário não encontrado");
        }
        await user.destroy();
        return { message: "Usuário deletado com sucesso!" };
      } catch (error) {
        throw new Error("Erro ao deletar usuário: " + error.message);
      }
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Corrigido: autoIncrement
        allowNull: false,
      },
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
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
        beforeUpdate: async (user) => {
          if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
      timestamps: true,
    }
  );

  return User;
};
