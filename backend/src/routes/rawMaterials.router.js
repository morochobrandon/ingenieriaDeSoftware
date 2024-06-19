const express = require("express");
const router = express.Router();
const rawMaterialsController = require("./../controllers/rawMaterials.controller");

router.get("/", rawMaterialsController.get);
router.get("/:id", rawMaterialsController.getById);
router.post("/", rawMaterialsController.create);
router.put("/:id", rawMaterialsController.update);
router.delete("/:id", rawMaterialsController._delete);

module.exports = router;
