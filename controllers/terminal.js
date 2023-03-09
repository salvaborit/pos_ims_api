const { terminal } = require("../models");

function createTerminal(req, res) {
  const { serialNumber } = req.body;

  terminal
    .findOne({ where: { serialNumber } })
    .then((existingTerminal) => {
      if (existingTerminal) {
        return res.status(400).json({ error: "Serial number already exists" });
      } else {
        terminal.create(req.body).then((newTerminal) => {
          return res.status(201).json(newTerminal);
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
}

function getAllTerminals(req, res) {
  terminal
    .findAll()
    .then((allTerminals) => {
      return res.status(200).json(allTerminals);
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
}

function getTerminalById(req, res) {
  const { id } = req.params;

  terminal
    .findByPk(id)
    .then((term) => {
      if (term) {
        return res.status(200).json(term);
      } else {
        return res
          .status(404)
          .json({ error: "Terminal with that ID not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
}

async function updateTerminalById(req, res) {
  const { id } = req.params;

  terminal
    .findByPk(id)
    .then((term) => {
      if (term) {
        terminal.update(req.body, { where: { id } }).then(() => {
          terminal.findByPk(id).then((updatedTerm) => {
            return res.status(200).json(updatedTerm);
          });
        });
      } else {
        return res
          .status(404)
          .json({ error: "Terminal with that ID not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
}

function deleteTerminalById(req, res) {
  const { id } = req.params;

  terminal
    .findByPk(id)
    .then((term) => {
      if (term) {
        terminal.destroy({ where: { id } }).then(() => {
          return res
            .status(200)
            .json({ message: "Terminal deleted correctly" });
        });
      } else {
        return res
          .status(404)
          .json({ error: "Terminal with that ID not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
}

module.exports = {
  createTerminal,
  getAllTerminals,
  getTerminalById,
  updateTerminalById,
  deleteTerminalById,
};
