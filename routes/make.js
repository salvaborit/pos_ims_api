const { Router } = require("express");
const makeController = require("../controllers/make");
const router = Router();

router.get("/", makeController.getAll);
router.get("/:id", makeController.getById);
router.post("/", makeController.postOne);
router.put("/:id", makeController.putById);
router.delete("/:id", makeController.deleteById);

module.exports = router;
