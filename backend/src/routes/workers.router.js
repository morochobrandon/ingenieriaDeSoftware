const express = require("express");
const router = express.Router();
const workersController = require("./../controllers/workers.controller");

router.get("/", workersController.get);
router.get("/:id", workersController.getById);
router.post("/", workersController.create);
router.put("/:id", workersController.update);
router.delete("/:id", workersController._delete);

module.exports = router;
