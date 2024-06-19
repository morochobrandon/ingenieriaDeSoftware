const { Model, DataTypes } = require("sequelize");

const RAWMATERIAL_TABLE = "materias primas";

class RawMaterial extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: RAWMATERIAL_TABLE,
      modeloName: "RawMaterial",
      timestamps: true,
    };
  }
}

const RawMaterialSchema = {
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
  precio_unitario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "precio_unitario",
  },
  precio_total: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "precio_total",
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "cantidad",
  },
  id_proveedor: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "id_proveedor",
  },
};

module.exports = { RawMaterial, RawMaterialSchema };
