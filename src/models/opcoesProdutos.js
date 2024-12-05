import { Model, DataTypes } from "sequelize";

// Função para definir o modelo de Opções de Produto
export default (sequelize) => {
  class ProductOption extends Model {
    // Aqui você pode adicionar métodos estáticos ou instâncias, se necessário
  }

  // Definindo o modelo da tabela "ProductOption"
  ProductOption.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Chave primária com incremento automático
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Coluna obrigatória
        references: {
          model: "Products", // Nome da tabela referenciada
          key: "id", // Chave primária da tabela Products
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Coluna obrigatória
      },
      shape: {
        type: DataTypes.ENUM("square", "circle"),
        allowNull: true, // Coluna opcional
        defaultValue: "square", // Valor padrão "square"
      },
      radius: {
        type: DataTypes.INTEGER,
        allowNull: true, // Coluna opcional
        defaultValue: 0, // Valor padrão 0
      },
      type: {
        type: DataTypes.ENUM("text", "color"),
        allowNull: true, // Coluna opcional
        defaultValue: "text", // Valor padrão "text"
      },
      values: {
        type: DataTypes.STRING,
        allowNull: false, // Coluna obrigatória
      },
    },
    {
      sequelize,
      modelName: "ProductOption",
      timestamps: true, // Gera as colunas "created_at" e "updated_at"
    }
  );

  // Definindo o relacionamento entre ProductOption e Product
  ProductOption.associate = (models) => {
    ProductOption.belongsTo(models.Product, {
      foreignKey: "product_id", // A chave estrangeira que se refere ao produto
      as: "product", // Alias para o relacionamento
    });
  };

  return ProductOption;
};
