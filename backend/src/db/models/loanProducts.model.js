const { Model, DataTypes } = require("sequelize");

const LOAN_PRODUCTS_TABLE = "prestamo Producto";

class LoanProduct extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: LOAN_PRODUCTS_TABLE,
      modeloName: "LoanProduct",
      timestamps: true,
    };
  }
}

const LoanProductSchema = {
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
  id_cliente: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "id_cliente",
  },
};

module.exports = { LoanProduct, LoanProductSchema };
