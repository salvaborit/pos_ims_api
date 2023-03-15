const { Router } = require("express");
const chipController = require("../controllers/chip");
const router = Router();

router.get("/", chipController.getAll);
router.get("/:id", chipController.getById);
router.post("/", chipController.postOne);
router.put("/:id", chipController.putById);
router.delete("/:id", chipController.deleteById);

module.exports = router;
