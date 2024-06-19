const { Model, DataTypes } = require("sequelize");

const PERSON_TABLE = "usuarios";

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modeloName: "User",
      timestamps: true,
    }
  }
}



const UserSchema = {
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

module.exports = { User, UserSchema };
