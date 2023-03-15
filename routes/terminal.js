const { Router } = require("express");
const terminalController = require("../controllers/terminal");
const router = Router();

router.get("/", terminalController.getAll);
router.get("/:id", terminalController.getById);
router.post("/", terminalController.postOne);
router.put("/:id", terminalController.putById);
router.delete("/:id", terminalController.deleteById);

module.exports = router;
