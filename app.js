const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const port = process.env.APP_PORT

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})

app.get('/', (req, res) => {
    res.json({ message: 'Servidor Corriendo' })
})