const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const acquirerRoutes = require('./routes/acquirer')
const connectivityRoutes = require('./routes/connectivity')
const locationController = require('./routes/location')
const makeController = require('./routes/make')
const statusController = require('./routes/status')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const port = process.env.APP_PORT

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})

app.use('/api/acquirer', acquirerRoutes)
app.use('/api/connectivity', connectivityRoutes)
app.use('/api/location', locationController)
app.use('/api/make', makeController)
app.use('/api/status', statusController)

app.get('/', (req, res) => {
    res.json({ message: 'Servidor Corriendo' })
})