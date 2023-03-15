"use strict";

const seeds = require("./acquirers.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("acquirers", seeds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("acquirers", null, {});
  },
};
