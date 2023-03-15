"use strict";

const seeds = require("./makes.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("makes", seeds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("makes", null, {});
  },
};
