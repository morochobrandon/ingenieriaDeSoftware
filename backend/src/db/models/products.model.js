const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "productos venta";

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modeloName: "ProductSale",
      timestamps: true,
    };
  }
}

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombre",
  },
  precio: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "precio",
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "tipo",
  },
  imagen: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "imagen",
  },
};

module.exports = { Product, ProductSchema };
