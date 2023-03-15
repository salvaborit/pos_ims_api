const { Router } = require('express')
const chipProviderController = require('../controllers/chipProvider')
const router = Router()

router.post('/add', chipProviderController.createChipProvider)
router.get('/all', chipProviderController.getAllChipsProviders)
router.get('/all/:id', chipProviderController.getChipProviderById)
router.put('/update/:id', chipProviderController.updateChipProviderById)
router.delete('/delete/:id', chipProviderController.deleteChipProviderById)

module.exports = router