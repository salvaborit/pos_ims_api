const { Router } = require('express')
const connectivityController = require('../controllers/connectivity')
const router = Router()

router.post('/add', connectivityController.createConnectivity)
router.get('/all', connectivityController.getAllConnectivitys)
router.get('/all/:id', connectivityController.getConnectivityById)
router.put('/update/:id', connectivityController.updateConnectivityById)
router.delete('/delete/:id', connectivityController.deleteConnectivityById)

module.exports = router