"use strict";

const seeds = require("./makes.json");
const { v4 } = require("uuid");

seeds.map((item) => {
  item.uuid = v4();
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("makes", seeds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("makes", null, {});
  },
};
