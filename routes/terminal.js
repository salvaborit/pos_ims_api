const { Router } = require("express");
const terminalController = require("../controllers/terminal");
const router = Router();

router.post("/add", terminalController.createTerminal);
router.get("/all", terminalController.getAllTerminals);
router.get("/all/:id", terminalController.getTerminalById);
router.put("/update/:id", terminalController.updateTerminalById);
router.delete("/delete/:id", terminalController.deleteTerminalById);

module.exports = router;
