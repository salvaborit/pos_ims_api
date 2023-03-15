const { Router } = require("express");
const statusController = require("../controllers/status");
const router = Router();

router.get("/", statusController.getAll);
router.get("/:id", statusController.getById);
router.post("/", statusController.postOne);
router.put("/:id", statusController.putById);
router.delete("/:id", statusController.deleteById);

module.exports = router;
