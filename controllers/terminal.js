const { terminal } = require("../models");

const createTerminal = async (req, res) => {
  const { serialNumber } = req.body;
  try {
    const existingterminal = await terminal.findOne({
      where: { serialNumber },
    });
    if (existingterminal) {
      return res.status(400).json({ error: "That terminal alredy exist" });
    }

    const term = await terminal.create(req.body);
    return res.status(201).json(term);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllTerminals = async (req, res) => {
  try {
    const terms = await terminal.findAll({});
    return res.status(201).json(terms);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTerminalById = async (req, res) => {
  try {
    const { id } = req.params;
    const term = await terminal.findByPk(id);

    if (term) {
      return res.status(200).json(term);
    }

    return res.status(404).json({ message: "terminal with that id not exist" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateTerminalById = async (req, res) => {
  try {
    const { id } = req.params;
    const term = await terminal.findByPk(id);

    if (!term) {
      return res.status(404).json({ error: "terminal with that id not exist" });
    }

    const updated = await terminal.update(req.body, { where: { id: id } });

    if (updated) {
      const updatedterminal = await terminal.findOne({ where: { id: id } });
      return res.status(200).json({ terminal: updatedterminal });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteTerminalById = async (req, res) => {
  try {
    const { id } = req.params;
    const term = await terminal.findByPk(id);

    if (!term) {
      return res
        .stauts(404)
        .json({ error: "terminal with that id dont exist" });
    }

    const deleted = await terminal.destroy({ where: { id: id } });
    return res.status(200).json({ message: "terminal deleted" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createTerminal,
  getAllTerminals,
  getTerminalById,
  updateTerminalById,
  deleteTerminalById,
};
