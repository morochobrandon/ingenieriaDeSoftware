const express = require("express");
const router = express.Router();
const managersController = require("./../controllers/managers.controller");

router.get("/", managersController.get);
router.get("/:id", managersController.getById);
router.post("/", managersController.create);
router.put("/:id", managersController.update);
router.delete("/:id", managersController._delete);

module.exports = router;
