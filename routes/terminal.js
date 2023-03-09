const { Router } = require("express");
const terminalController = require("../controllers/terminal");
const router = Router();

router.post("/add", terminalController.createTerminal);
router.get("/all", terminalController.getAllTerminals);
router.get("/all/:id", terminalController.getTerminalById);
router.put("/all/:id", terminalController.updateTerminalById);
router.delete("/all/:id", terminalController.deleteTerminalById);

module.exports = router;
