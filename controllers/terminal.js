const {
  terminal,
  acquirer,
  make,
  location,
  status,
  connectivity,
  chip,
} = require("../models");

const getAll = async (req, res) => {
  try {
    const foundItems = await terminal.findAll({
      include: [acquirer, make, location, status, connectivity, chip],
    });
    return res.status(200).json(foundItems);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundItem = await terminal.findByPk(id);
    if (!foundItem) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(foundItem);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch" });
  }
};

const postOne = async (req, res) => {
  const {
    serialNumber,
    partNumber,
    acquirerId,
    makeId,
    locationId,
    statusId,
    connectivityId,
    chipId,
    softwareVersion,
    haskeys,
    remarks,
  } = req.body;

  try {
    const foundItem = await terminal.findOne({ where: { serialNumber } });
    if (foundItem)
      return res.status(400).json({ error: "Serial number already exists" });
    await terminal.create({
      serialNumber,
      partNumber,
      acquirerId,
      makeId,
      locationId,
      statusId,
      connectivityId,
      chipId,
      softwareVersion,
      haskeys,
      remarks,
    });
    return res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to create" });
  }
};

const putById = async (req, res) => {
  const { id } = req.params;
  const {
    serialNumber,
    partNumber,
    acquirerId,
    makeId,
    locationId,
    statusId,
    connectivityId,
    chipId,
    softwareVersion,
    haskeys,
    remarks,
  } = req.body;

  try {
    const foundItem = await terminal.findByPk(id);
    if (!foundItem) return res.status(404).json({ message: "Not found" });
    await terminal.update(
      {
        serialNumber,
        partNumber,
        acquirerId,
        makeId,
        locationId,
        statusId,
        connectivityId,
        chipId,
        softwareVersion,
        haskeys,
        remarks,
      },
      { where: { id } }
    );
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to update" });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundItem = await terminal.findByPk(id);
    if (!foundItem) return res.status(404).json({ error: "Not found" });
    await terminal.destroy({ where: { id } });
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
