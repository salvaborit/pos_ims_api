"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize, DataTypes) {
    await queryInterface.createTable("terminals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      partNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acquirerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "acquirer",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      makeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "make",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "location",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "status",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      connectivityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "connectivity",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("terminals");
  },
};
