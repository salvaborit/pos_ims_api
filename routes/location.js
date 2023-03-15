const { Router } = require("express");
const locationController = require("../controllers/location");
const router = Router();

router.get("/", locationController.getAll);
router.get("/:id", locationController.getById);
router.post("/", locationController.postOne);
router.put("/:id", locationController.putById);
router.delete("/:id", locationController.deleteById);

module.exports = router;
