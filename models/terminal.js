"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class terminal extends Model {
    static associate(models) {
      terminal.belongsTo(models.acquirer, {
        foreignKey: "acquirerId",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      });
      terminal.belongsTo(models.make, {
        foreignKey: "makeId",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      });
      terminal.belongsTo(models.location, {
        foreignKey: "locationId",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      });
      terminal.belongsTo(models.status, {
        foreignKey: "statusId",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      });
      terminal.belongsTo(models.connectivity, {
        foreignKey: "connectivityId",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      });
      terminal.belongsTo(models.chip, {
        foreignKey: "chipId",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      });
    }
  }
  terminal.init(
    {
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
      },
      makeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      connectivityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      softwareVersion: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      chipId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hasKeys: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "terminal",
      tableName: "terminals",
      timestamps: true,
    }
  );
  return terminal;
};
