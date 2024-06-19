const express = require("express");
const router = express.Router();
const loanProductsController = require("./../controllers/loanProducts.controller");

router.get("/", loanProductsController.get);
router.get("/:id", loanProductsController.getById);
router.post("/", loanProductsController.create);
router.put("/:id", loanProductsController.update);
router.delete("/:id", loanProductsController._delete);

module.exports = router;
