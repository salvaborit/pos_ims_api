"use strict";

const seeds = require("./statuses.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("statuses", seeds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("statuses", null, {});
  },
};
