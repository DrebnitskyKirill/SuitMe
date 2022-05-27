'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Activity.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};
