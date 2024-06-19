const express = require("express");
const router = express.Router();
const clientsController = require("./../controllers/clients.controller");

router.get("/", clientsController.get);
router.get("/:id", clientsController.getById);
router.post("/", clientsController.create);
router.put("/:id", clientsController.update);
router.delete("/:id", clientsController._delete);

module.exports = router;
