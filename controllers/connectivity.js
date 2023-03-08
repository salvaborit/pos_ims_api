const { connectivity } = require('../models')

const createConnectivity = async (req, res) => {
    const { type } = req.body

    try {
        const existingConnectivity = await connectivity.findOne({ where: { type } })
        if (existingConnectivity) {
            return res.status(400).json({ error: 'That type of connectivity alredy exists' })
        }

        const conn = await connectivity.create(req.body)
        return res.status(201).json({ conn })
    } catch (error) {
        console.log(error)
    }
}

const getAllConnectivitys = async (req, res) => {
    try {
        const conns = await connectivity.findAll({})
        return res.status(201).json({ conns })
    } catch (error) {
        console.log(error)
    }
}

const getConnectivityById = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await connectivity.findByPk(id)

        if (conn) {
            return res.status(200).json({ conn })
        }

        return res.status(404).json({ message: 'Connectivity with that id not exist' })
    } catch (error) {
        console.log(error)
    }
}

const updateConnectivityById = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await connectivity.findByPk(id)

        if (!conn) {
            return res.status(404).json({ error: 'Connectivity with that id not exist' })
        }

        const updated = await connectivity.update(req.body, { where: { id: id } })

        if (updated) {
            const updatedConn = await connectivity.findByPk(id)
            return res.status(200).json({ acquirer: updatedConn })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteConnectivityById = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await connectivity.findByPk(id)

        if (!conn) {
            return res.status(404).json({ error: 'Connectivity with that id not exist' })
        }

        const deleted = await connectivity.destroy({ where: { id: id } })

        if (deleted) {
            const deletedConn = await connectivity.findOne({ where: { id: id } })
            return res.status(200).json({ message: 'Connectivity deleted' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createConnectivity,
    getAllConnectivitys,
    getConnectivityById,
    updateConnectivityById,
    deleteConnectivityById
}