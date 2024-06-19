const { Model, DataTypes } = require("sequelize");

const WORKER_TABLE = "trabajadores";

class Worker extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: WORKER_TABLE,
      modeloName: "Worker",
      timestamps: true,
    };
  }
}



const WorkerSchema = {
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
  cargo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "cargo",
  },
  local_donde_trabaja: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "local_donde_trabaja",
  },
};

module.exports = { Worker, WorkerSchema };
