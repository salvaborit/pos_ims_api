const { Router } = require("express");
const connectivityController = require("../controllers/connectivity");
const router = Router();

router.get("/", connectivityController.getAll);
router.get("/:id", connectivityController.getById);
router.post("/", connectivityController.postOne);
router.put("/:id", connectivityController.putById);
router.delete("/:id", connectivityController.deleteById);

module.exports = router;
