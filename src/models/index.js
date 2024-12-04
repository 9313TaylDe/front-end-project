import Sequelize from "sequelize";
import UserModel from "./user.js";

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize.DataTypes);

export { sequelize, User };
