const { connectivity } = require("../models");

const getAll = async (req, res) => {
  try {
    const foundItems = await connectivity.findAll();
    return res.status(200).json(foundItems);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundItem = await connectivity.findByPk(id);
    if (!foundItem) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(foundItem);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch" });
  }
};

const postOne = async (req, res) => {
  const { type } = req.body;

  try {
    const foundItem = await connectivity.findOne({ where: { type } });
    if (foundItem)
      return res.status(400).json({ error: "Type already exists" });
    await connectivity.create({ type });
    return res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to create" });
  }
};

const putById = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  try {
    const foundItem = await connectivity.findByPk(id);
    if (!foundItem) return res.status(404).json({ message: "Not found" });
    await connectivity.update({ type }, { where: { id } });
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to update" });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundItem = await connectivity.findByPk(id);
    if (!foundItem) return res.status(404).json({ error: "Not found" });
    await connectivity.destroy({ where: { id } });
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  getAll,
  getById,
  postOne,
  putById,
  deleteById,
};
