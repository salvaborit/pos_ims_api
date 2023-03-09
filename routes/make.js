const { Router } = require('express')
const makeController = require('../controllers/make')
const router = Router()

router.post('/add', makeController.createMake)
router.get('/all', makeController.getAllMakes)
router.get('/all/:id', makeController.getMakeById)
router.put('/update/:id', makeController.updateMakeById)
router.delete('/delete/:id', makeController.deleteMakeById)

module.exports = router