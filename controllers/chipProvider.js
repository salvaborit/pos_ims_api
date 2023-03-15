const { chipProvider } = require("../models");

const createChipProvider = async (req, res) => {
  const { name } = req.body;

  try {
    const existingChipProvider = await chipProvider.findOne({
      where: { name },
    });
    if (existingChipProvider) {
      return res
        .status(400)
        .json({ error: "Chip Provider with that name alredy exist" });
    }

    const prvdr = await chipProvider.create(req.body);
    return res.status(201).json(prvdr);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllChipsProviders = async (req, res) => {
  try {
    const prvdrs = await chipProvider.findAll({});
    return res.status(200).json(prvdrs);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getChipProviderById = async (req, res) => {
  try {
    const { id } = req.params;
    const prvdr = await chipProvider.findByPk(id);

    if (prvdr) {
      return res.status(200).json(prvdr);
    }

    return res
      .status(404)
      .json({ error: "Chip Provider with that id dont exist" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateChipProviderById = async (req, res) => {
  try {
    const { id } = req.params;
    const prvdr = await chipProvider.findByPk(id);

    if (!prvdr) {
      return res
        .status(404)
        .json({ error: "Chip Provider with that id dont exists" });
    }

    const updated = await chipProvider.update(req.body, { where: { id: id } });

    if (updated) {
      const updatedChipProvider = await chipProvider.findByPk(id);
      return res.status(200).json({ chipProvider: updatedChipProvider });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteChipProviderById = async (req, res) => {
  try {
    const { id } = req.params;
    const prvdr = await chipProvider.findByPk(id);

    if (!prvdr) {
      return res
        .status(404)
        .json({ error: "Chip Provider with that id dont exists" });
    }

    const deleted = await chipProvider.destroy({ where: { id: id } });

    if (deleted) {
      const deletedChipProvider = await chipProvider.findByPk(id);
      return res.status(200).json({ message: "Chip Provider deleted" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createChipProvider,
  getAllChipsProviders,
  getChipProviderById,
  updateChipProviderById,
  deleteChipProviderById,
};
