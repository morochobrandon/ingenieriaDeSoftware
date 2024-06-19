const { Model, DataTypes } = require("sequelize");

const MANAGER_TABLE = "managers";

class Manager extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: MANAGER_TABLE,
      modeloName: "Manager",
      timestamps: true,
    };
  }
}



const ManagerSchema = {
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

module.exports = { Manager, ManagerSchema };
