const { chip } = require("../models");

const createChip = async (req, res) => {
  const { serialNumber } = req.body;

  try {
    const existingChip = await chip.findOne({ where: { serialNumber } });
    if (existingChip) {
      return res
        .status(400)
        .json({ error: "Chip with that serial alredy exist" });
    }

    const chp = await chip.create(req.body);
    return res.status(201).json(chp);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllChips = async (req, res) => {
  try {
    const chps = await chip.findAll({});
    return res.status(200).json(chps);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getChipById = async (req, res) => {
  try {
    const { id } = req.params;
    const chp = await chip.findByPk(id);

    if (chp) {
      return res.status(200).json(chp);
    }

    return res.status(404).json({ error: "Chip with that id dont exist" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateChipById = async (req, res) => {
  try {
    const { id } = req.params;
    const chp = await chip.findByPk(id);

    if (!chp) {
      return res.status(404).json({ error: "Chip with that id dont exists" });
    }

    const updated = await chip.update(req.body);

    if (updated) {
      const updatedChip = await chip.findByPk(id);
      return res.status(200).json({ chip: updatedChip });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteChipById = async (req, res) => {
  try {
    const { id } = req.params;
    const chp = await chip.findByPk(id);

    if (!chp) {
      return res.status(404).json({ error: "Chip with that id dont exists" });
    }

    const deleted = await chip.destroy({ where: { id: id } });

    if (deleted) {
      const deletedChip = await chip.findByPk(id);
      return res.status(200).json({ message: "Chip deleted" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createChip,
  getAllChips,
  getChipById,
  updateChipById,
  deleteChipById,
};
