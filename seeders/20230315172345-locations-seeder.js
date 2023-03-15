"use strict";

const seeds = require("./locations.json");
const { v4 } = require("uuid");

seeds.map((item) => {
  item.uuid = v4();
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("locations", seeds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
