const { Router } = require("express");
const acquirerController = require("../controllers/acquirer");
const router = Router();

router.get("/", acquirerController.getAll);
router.get("/:id", acquirerController.getById);
router.post("/", acquirerController.postOne);
router.put("/:id", acquirerController.putById);
router.delete("/:id", acquirerController.deleteById);

module.exports = router;
