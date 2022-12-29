const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

const User = sequelize.define(
  "User",
  {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    ip: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = { sequelize, User };
