const { chipprovider } = require('../models')

const createChipProvider = async (req, res) => {
    const { name } = req.body

    try {
        const existingChipProvider = await chipprovider.findOne({ where: { name } })
        if (existingChipProvider) {
            return res.status(400).json({ error: 'Chip Provider with that name alredy exist' })
        }

        const prvdr = await chipprovider.create(req.body)
        return res.status(201).json({ prvdr })

    } catch (error) {
        console.log(error)
    }
}

const getAllChipsProviders = async (req, res) => {
    try {
        const prvdrs = await chipprovider.findAll({})
        return res.status(200).json({ prvdrs })
    } catch (error) {
        console.log(error)
    }
}

const getChipProviderById = async (req, res) => {
    try {
        const { id } = req.params
        const prvdr = await chipprovider.findByPk(id)

        if (prvdr) {
            return res.status(200).json({ prvdr })
        }

        return res.status(404).json({ error: 'Chip Provider with that id dont exist' })
    } catch (error) {
        console.log(error)
    }
}

const updateChipProviderById = async (req, res) => {
    try {
        const { id } = req.params
        const prvdr = await chipprovider.findByPk(id)

        if (!prvdr) {
            return res.status(404).json({ error: 'Chip Provider with that id dont exists' })
        }

        const updated = await chipprovider.update(req.body)

        if (updated) {
            const updatedChipProvider = await chipprovider.findByPk(id)
            return res.status(200).json({ chip: updatedChipProvider })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteChipProviderById = async (req, res) => {
    try {
        const { id } = req.params
        const prvdr = await chipprovider.findByPk(id)

        if (!prvdr) {
            return res.status(404).json({ error: 'Chip Provider with that id dont exists' })
        }

        const deleted = await chipprovider.destroy({ where: { id: id } })

        if (deleted) {
            const deletedChipProvider = await chipprovider.findByPk(id)
            return res.status(200).json({ message: 'Chip Provider deleted' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createChipProvider,
    getAllChipsProviders,
    getChipProviderById,
    updateChipProviderById,
    deleteChipProviderById
}