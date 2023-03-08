const { Router } = require('express')
const acquirerController = require('../controllers/acquirer')
const router = Router()

router.post('/add', acquirerController.createAcquirer)
router.get('/all', acquirerController.getAllAcquirers)
router.get('/all/:id', acquirerController.getAcquirerById)
router.put('/update/:id', acquirerController.updateAcquirerById)
router.delete('/delete/:id', acquirerController.deleteAcquirerById)

module.exports = router