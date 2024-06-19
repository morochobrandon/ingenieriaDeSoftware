const { Model, DataTypes } = require("sequelize");

const CLIENT_TABLE = "clientes";

class Client extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modeloName: "Client",
      timestamps: true,
    };
  }
}

const ClientSchema = {
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
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "apellido",
  },
  segundo_nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "segundo_nombre",
  },
  segundo_apellido: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "segundo_apellido",
  },
  cedula: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "cedula",
  },
  deuda_acomulada: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "deuda_acomulada",
  },
};

module.exports = { Client, ClientSchema };
