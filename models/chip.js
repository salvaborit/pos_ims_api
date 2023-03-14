"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chip extends Model {
    static associate(models) {
      this.belongsTo(models.chipProvider, {
        foreignKey: "providerId",
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      });
    }
  }
  chip.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      providerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "chip",
      tableName: "chips",
    }
  );
  return chip;
};
