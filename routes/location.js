const { Router } = require('express')
const locationController = require('../controllers/location')
const router = Router()

router.post('/add', locationController.createLocation)
router.get('/all', locationController.getAllLocations)
router.get('/all/:id', locationController.getLocationById)
router.put('/update/:id', locationController.updateLocationById)
router.delete('/delete/:id', locationController.deleteLocationById)

module.exports = router