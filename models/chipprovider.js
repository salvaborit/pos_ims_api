"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chipProvider extends Model {
    static associate(models) {}
  }
  chipProvider.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "chipProvider",
      tableName: "chipProviders",
      timestamps: false,
    }
  );
  return chipProvider;
};
