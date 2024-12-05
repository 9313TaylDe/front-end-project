import { Model, DataTypes } from "sequelize";

// Função para definir o modelo de Categoria
export default (sequelize) => {
  class Category extends Model {}
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // A coluna "name" é obrigatória
      },

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Chave primária com incremento automático
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false, // A coluna "slug" é obrigatória
      },
      use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: true, // Coluna opcional
        defaultValue: false, // Valor padrão é "false" (0)
      },
    },
    {
      sequelize,
      modelName: "Category",
      timestamps: true, // Gera as colunas "created_at" e "updated_at"
    }
  );

  return Category;
};
