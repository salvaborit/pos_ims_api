"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("terminals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      serialNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      partNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      acquirerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "acquirers",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      makeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "makes",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "locations",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "statuses",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      connectivityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "connectivities",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      chipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "chips",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      softwareVersion: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      hasKeys: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      remarks: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("terminals");
  },
};
