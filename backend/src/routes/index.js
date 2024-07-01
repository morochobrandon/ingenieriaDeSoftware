const express = require('express');

const admonsRouter = require("./admons.router");
const managersRouter = require("./managers.router");
const productsRouter = require("./products.router");
const clientsRouter = require("./clients.router");
const suppliersRouter = require("./suppliers.router");
const loanProductsRouter = require("./loanProducts.router");
const rawMaterialsRouter = require("./rawMaterials.router");
const workersRouter = require("./workers.router");
const salesRouter = require("./sales.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/manager", managersRouter); 
  router.use("/admon", admonsRouter); //
  router.use("/products", productsRouter); //  HECHO
  router.use("/clients", clientsRouter); //HECHO
  router.use("/suppliers", suppliersRouter); //HECHO
  router.use("/loanProducts", loanProductsRouter);
  router.use("/rawMaterials", rawMaterialsRouter); //HECHO
  router.use("/workers", workersRouter); //HECHO
  router.use("/sales", salesRouter); //HECHO
}

module.exports = routerApi;
