const { Person, PersonSchema } = require("./persons.model.js");
const { Product, ProductSchema } = require("./products.model.js");
const { Client, ClientSchema } = require("./clients.model.js");
const { Supplier, SupplierSchema } = require("./suppliers.model.js");
const { LoanProduct, LoanProductSchema } = require("./loanProducts.model.js");
const { RawMaterial, RawMaterialSchema } = require("./rawMaterials.model.js");
const { Worker, WorkerSchema } = require("./workers.js");

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  Supplier.init(SupplierSchema, Supplier.config(sequelize));
  LoanProduct.init(LoanProductSchema, LoanProduct.config(sequelize));
  RawMaterial.init(RawMaterialSchema, RawMaterial.config(sequelize));
  Worker.init(WorkerSchema, Worker.config(sequelize));
 
}

module.exports = setupModels;
