import { Model, DataTypes } from "sequelize";

// Função para definir o modelo de Imagem de Produto
export default (sequelize) => {
  class ProductImage extends Model {
    // Aqui você pode adicionar métodos estáticos ou instâncias, se necessário
  }

  // Definindo o modelo da tabela "ProductImage"
  ProductImage.init(
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
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true, // Coluna opcional
        defaultValue: false, // Valor padrão é "false" (0)
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false, // Coluna obrigatória
      },
    },
    {
      sequelize,
      modelName: "ProductImage",
      timestamps: true, // Gera as colunas "created_at" e "updated_at"
    }
  );

  // Definindo o relacionamento entre ProductImage e Product
  ProductImage.associate = (models) => {
    ProductImage.belongsTo(models.Product, {
      foreignKey: "product_id", // A chave estrangeira que se refere ao produto
      as: "product", // Alias para o relacionamento
    });
  };

  return ProductImage;
};
