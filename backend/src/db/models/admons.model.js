const { Model, DataTypes } = require("sequelize");

const ADMON_TABLE = "Administradores";

class Admon extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ADMON_TABLE,
      modeloName: "Admon",
      timestamps: true,
    };
  }
}



const AdmonSchema = {
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
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "correo",
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "password",
  },
  tipo_usuario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "tipo_usuario",
  },
};

module.exports = { Admon, AdmonSchema };
