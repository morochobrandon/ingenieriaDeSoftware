const express = require("express");
const router = express.Router();
const productsController = require("./../controllers/products.controller");

router.get("/", productsController.get);
router.get("/:id", productsController.getById);
router.post("/", productsController.create);
router.put("/:id", productsController.update);
router.delete("/:id", productsController._delete);

module.exports = router;
