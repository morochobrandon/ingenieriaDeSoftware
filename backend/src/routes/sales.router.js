const express = require("express");
const router = express.Router();
const salesController = require("./../controllers/sales.controller");

router.get("/", salesController.get);
router.get("/:id", salesController.getById);
router.post("/", salesController.create);
router.put("/:id", salesController.update);
router.delete("/:id", salesController._delete);

module.exports = router;
