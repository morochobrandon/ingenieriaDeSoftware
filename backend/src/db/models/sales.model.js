const { Model, DataTypes } = require("sequelize");

const SALES_TABLE = "ventas";

class Sale extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SALES_TABLE,
      modeloName: "Ventas",
      timestamps: true,
    };
  }
}

const SaleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  efectivo_bs: {
    allowNull: false,
    type: DataTypes.FLOAT, 
  },
  pagoMovil_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  efectivo_divisa: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  efectivo_euros: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  zelle: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  credito: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  transferencia_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdd_provincial_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdc_provincial_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdd_bancamiga_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdc_bancamiga_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdd_banesco_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdc_banesco_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdd_mercantil_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  pdv_tdc_mercantil_bs: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
};

module.exports = { Sale, SaleSchema };
