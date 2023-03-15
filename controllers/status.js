const { status } = require("../models");

const getAll = async (req, res) => {
  try {
    const foundItems = await status.findAll();
    return res.status(200).json(foundItems);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundItem = await status.findByPk(id);
    if (!foundItem) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(foundItem);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch" });
  }
};

const postOne = async (req, res) => {
  const { name } = req.body;

  try {
    const foundItem = await status.findOne({ where: { name } });
    if (foundItem)
      return res.status(400).json({ error: "Name already exists" });
    await status.create({ name });
    return res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to create" });
  }
};

const putById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const foundItem = await status.findByPk(id);
    if (!foundItem) return res.status(404).json({ message: "Not found" });
    await status.update({ name }, { where: { id } });
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to update" });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundItem = await status.findByPk(id);
    if (!foundItem) return res.status(404).json({ error: "Not found" });
    await status.destroy({ where: { id } });
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
