const { acquirer } = require("../models");

const createAcquirer = async (req, res) => {
  const { name } = req.body;

  try {
    const existingAcquirer = await acquirer.findOne({ where: { name } });
    if (existingAcquirer) {
      return res
        .status(400)
        .json({ error: "Acquirer with that name alredy exist" });
    }

    const acqr = await acquirer.create(req.body);
    return res.status(201).json(acqr);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllAcquirers = async (req, res) => {
  try {
    const acqrs = await acquirer.findAll({});
    return res.status(200).json(acqrs);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAcquirerById = async (req, res) => {
  try {
    const { id } = req.params;
    const acqr = await acquirer.findByPk(id);

    if (acqr) {
      return res.status(200).json(acqr);
    }

    return res.status(404).json({ error: "Acquirer with that id not exist" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateAcquirerById = async (req, res) => {
  try {
    const { id } = req.params;
    const acqr = await acquirer.findByPk(id);

    if (!acqr) {
      return res.status(404).json({ error: "Acquirer with that id not exist" });
    }

    const updated = await acquirer.update(req.body, { where: { id: id } });

    if (updated) {
      const updatedAcqr = await acquirer.findByPk(id);
      return res.status(200).json({ acquirer: updatedAcqr });
    }
  } catch (error) {}
};

const deleteAcquirerById = async (req, res) => {
  try {
    const { id } = req.params;
    const acqr = await acquirer.findByPk(id);

    if (!acqr) {
      return res
        .status(404)
        .json({ error: "Acquirer with that id dont exist" });
    }

    const deleted = await acquirer.destroy({ where: { id: id } });

    if (deleted) {
      const deletedAcqr = await acquirer.findByPk(id);
      return res.status(200).json({ message: "Acquirer deleted" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createAcquirer,
  getAllAcquirers,
  getAcquirerById,
  updateAcquirerById,
  deleteAcquirerById,
};
