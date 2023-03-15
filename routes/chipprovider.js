const { Router } = require("express");
const chipProviderController = require("../controllers/chipProvider");
const router = Router();

router.get("/", chipProviderController.getAll);
router.get("/:id", chipProviderController.getById);
router.post("/", chipProviderController.postOne);
router.put("/:id", chipProviderController.putById);
router.delete("/:id", chipProviderController.deleteById);

module.exports = router;
