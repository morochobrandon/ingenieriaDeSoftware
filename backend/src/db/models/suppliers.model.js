const { Model, DataTypes } = require("sequelize");

const SUPPLIER_TABLE = "proveedores";

class Supplier extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SUPPLIER_TABLE,
      modeloName: "Supplier",
      timestamps: true,
    };
  }
}

const SupplierSchema = {
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
  nro_telefono: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nro_telefono",
  },
  nro_factura: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nro_factura",
  },
};

module.exports = { Supplier, SupplierSchema };
