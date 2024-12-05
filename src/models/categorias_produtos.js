import { Model, DataTypes } from "sequelize";

// Função para definir o modelo de Opções de Produto relacionada à Categoria
export default (sequelize) => {
  class ProductCategoryOption extends Model {
    // Aqui você pode adicionar métodos estáticos ou instâncias, se necessário
  }

  // Definindo o modelo da tabela "ProductCategoryOption"
  ProductCategoryOption.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Coluna obrigatória
        references: {
          model: "Products", // Nome da tabela referenciada
          key: "id", // Chave primária da tabela Products
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Coluna obrigatória
        references: {
          model: "Categories", // Nome da tabela referenciada
          key: "id", // Chave primária da tabela Categories
        },
      },
    },
    {
      sequelize,
      modelName: "ProductCategoryOption",
      timestamps: true, // Gera as colunas "created_at" e "updated_at"
    }
  );

  // Definindo os relacionamentos
  ProductCategoryOption.associate = (models) => {
    ProductCategoryOption.belongsTo(models.Product, {
      foreignKey: "product_id", // Chave estrangeira para a tabela Product
      as: "product", // Alias para o relacionamento
    });

    ProductCategoryOption.belongsTo(models.Category, {
      foreignKey: "category_id", // Chave estrangeira para a tabela Category
      as: "category", // Alias para o relacionamento
    });
  };

  return ProductCategoryOption;
};
