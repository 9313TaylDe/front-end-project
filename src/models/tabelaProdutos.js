import { DataTypes, Model } from "sequelize";

// Defina o modelo Product estendendo a classe Model
class Product extends Model {}

const defineProductModel = (sequelize) => {
  // Utilize o método `init()` para inicializar o modelo
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // Adicione outros campos conforme necessário...
    },
    {
      sequelize, // Passando a instância do sequelize
      modelName: "Product", // Nome do modelo
      timestamps: true, // Se você precisar de createdAt e updatedAt
    }
  );

  return Product;
};

export default defineProductModel;
