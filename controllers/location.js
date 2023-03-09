const { location } = require('../models')

const createLocation = async (req, res) => {
    const { name } = req.body
    try {
        const existingLocation = await location.findOne({ where: { name } })
        if (existingLocation) {
            return res.status(400).json({ error: 'That location alredy exist' })
        }

        const locn = await location.create(req.body)
        return res.status(201).json({ locn })
    } catch (error) {
        console.log(error)
    }
}


const getAllLocations = async (req, res) => {
    try {
        const locns = await location.findAll({})
        return res.status(201).json({ locns })
    } catch (error) {
        console.log(error)
    }
}

const getLocationById = async (req, res) => {
    try {
        const { id } = req.params
        const locn = await location.findByPk(id)

        if (locn) {
            return res.status(200).json({ locn })
        }

        return res.status(404).json({ message: 'Location with that id not exist' })
    } catch (error) {
        console.log(error)
    }
}

const updateLocationById = async (req, res) => {
    try {
        const { id } = req.params
        const locn = await location.findByPk(id)

        if (!locn) {
            return res.status(404).json({ error: 'Location with that id not exist' })
        }

        const updated = await location.update(req.body, { where: { id: id } })

        if (updated) {
            const updatedLocation = await location.findOne({ where: { id: id } })
            return res.status(200).json({ location: updatedLocation })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteLocationById = async (req, res) => {
    try {
        const { id } = req.params
        const locn = await location.findByPk(id)

        if (!locn) {
            return res.stauts(404).json({ error: 'Location with that id dont exist' })
        }

        const deleted = await location.destroy({ where: { id: id } })
        return res.status(200).json({ message: 'Location deleted' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocationById,
    deleteLocationById
}