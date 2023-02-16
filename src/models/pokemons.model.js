const { DataTypes } = require("sequelize");
const { db } = require("../database/conect");

const Pokemon = db.define("pokemon", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "available",
    allowNull: false
  }
})

module.exports = Pokemon