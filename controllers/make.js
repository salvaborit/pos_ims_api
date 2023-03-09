const { make } = require("../models");

const createMake = async (req, res) => {
  const { name } = req.body;
  try {
    const existingMake = await make.findOne({ where: { name } });
    if (existingMake) {
      return res.status(400).json({ error: "Make already exists" });
    }

    const mk = await make.create(req.body);
    return res.status(201).json({ mk });
  } catch (error) {
    console.log(error);
  }
};

const getAllMakes = async (req, res) => {
  try {
    const mks = await make.findAll({});
    return res.status(201).json({ mks });
  } catch (error) {
    console.log(error);
  }
};

const getMakeById = async (req, res) => {
  try {
    const { id } = req.params;
    const mk = await make.findByPk(id);

    if (mk) {
      return res.status(200).json({ mk });
    }

    return res.status(404).json({ message: "Make with that id not exist" });
  } catch (error) {
    console.log(error);
  }
};

const updateMakeById = async (req, res) => {
  try {
    const { id } = req.params;
    const mk = await make.findByPk(id);

    if (!mk) {
      return res.status(404).json({ error: "Make with that id not exist" });
    }

    const updated = await make.update(req.body, { where: { id: id } });

    if (updated) {
      const updatedMk = await make.findOne({ where: { id: id } });
      return res.status(200).json({ make: updatedMk });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteMakeById = async (req, res) => {
  try {
    const { id } = req.params;
    const mk = await make.findByPk(id);

    if (!mk) {
      return res.stauts(404).json({ error: "Make with that id dont exist" });
    }

    const deleted = await make.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Make deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createMake,
  getAllMakes,
  getMakeById,
  updateMakeById,
  deleteMakeById,
};
