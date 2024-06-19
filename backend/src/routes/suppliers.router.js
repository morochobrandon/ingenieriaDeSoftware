const express = require("express");
const router = express.Router();
const suppliersController = require("./../controllers/suppliers.controller");

router.get("/", suppliersController.get);
router.get("/:id", suppliersController.getById);
router.post("/", suppliersController.create);
router.put("/:id", suppliersController.update);
router.delete("/:id", suppliersController._delete);

module.exports = router;
