const { Admon, AdmonSchema } = require("./admons.model.js");
const { Manager, ManagerSchema } = require("./managers.model.js");
const { Product, ProductSchema } = require("./products.model.js");
const { Client, ClientSchema } = require("./clients.model.js");
const { Supplier, SupplierSchema } = require("./suppliers.model.js");
const { LoanProduct, LoanProductSchema } = require("./loanProducts.model.js");
const { RawMaterial, RawMaterialSchema } = require("./rawMaterials.model.js");
const { Worker, WorkerSchema } = require("./workers.model.js");
const { Sale, SaleSchema } = require("./sales.model.js");

function setupModels(sequelize) {
  Admon.init(AdmonSchema, Admon.config(sequelize));
  Manager.init(ManagerSchema, Manager.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  Supplier.init(SupplierSchema, Supplier.config(sequelize));
  LoanProduct.init(LoanProductSchema, LoanProduct.config(sequelize));
  RawMaterial.init(RawMaterialSchema, RawMaterial.config(sequelize));
  Worker.init(WorkerSchema, Worker.config(sequelize));
  Sale.init(SaleSchema, Sale.config(sequelize));
}

module.exports = setupModels;
