const db = require("../models");

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Altered table");
});
