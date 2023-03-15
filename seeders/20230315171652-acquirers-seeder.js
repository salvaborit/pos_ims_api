"use strict";

const seeds = require("./acquirers.json");
const { v4 } = require("uuid");

seeds.map((item) => {
  item.uuid = v4();
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("acquirers", seeds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("acquirers", null, {});
  },
};
