const { status } = require("../models");

const createStatus = async (req, res) => {
  const { name } = req.body;

  try {
    const existingStatus = await status.findOne({ where: { name } });
    if (existingStatus) {
      return res.status(400).json({ error: "That status alredy exist" });
    }

    const sts = await status.create(req.body);
    return res.status(201).json(sts);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllStatus = async (req, res) => {
  try {
    const stes = await status.findAll({});
    return res.status(201).json(stes);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const sts = await status.findByPk(id);

    if (sts) {
      return res.status(200).json(sts);
    }

    return res.status(404).json({ message: "Status with that id not exist" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const sts = await status.findByPk(id);

    if (!sts) {
      return res.status(404).json({ error: "Status with that id not exist" });
    }

    const updated = await status.update(req.body, { where: { id: id } });

    if (updated) {
      const updatedStatus = await status.findOne({ where: { id: id } });
      return res.status(200).json({ status: updatedStatus });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const sts = await status.findByPk(id);

    if (!sts) {
      return res.stauts(404).json({ error: "Status with that id dont exist" });
    }

    const deleted = await status.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Status deleted" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createStatus,
  getAllStatus,
  getStatusById,
  updateStatusById,
  deleteStatusById,
};
