const { Router } = require('express')
const chipController = require('../controllers/chip')
const router = Router()

router.post('/add', chipController.createChip)
router.get('/all', chipController.getAllChips)
router.get('/all/:id', chipController.getChipById)
router.put('/update/:id', chipController.updateChipById)
router.delete('/delete/:id', chipController.deleteChipById)

module.exports = router