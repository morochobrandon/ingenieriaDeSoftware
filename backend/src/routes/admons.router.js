const express = require("express");
const router = express.Router();
const admonsController = require("./../controllers/admons.controller");

router.get("/", admonsController.get);
router.get("/:id", admonsController.getById);
router.post("/", admonsController.create);
router.put("/:id", admonsController.update);
router.delete("/:id", admonsController._delete);

module.exports = router;
