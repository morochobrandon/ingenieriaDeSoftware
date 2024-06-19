const express = require("express");
const router = express.Router();
const personsController = require("./../controllers/persons.controller");

router.get("/", personsController.get);
router.get("/:id", personsController.getById);
router.post("/", personsController.create);
router.put("/:id", personsController.update);
router.delete("/:id", personsController._delete);

module.exports = router;
