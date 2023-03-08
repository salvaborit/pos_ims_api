"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class connectivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  connectivity.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "connectivity",
      tableName: "connectivities",
      timestamps: false,
    }
  );
  return connectivity;
};
