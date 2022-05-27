'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {

    
    static associate({Product, Product_activity}) {
      this.belongsToMany(Product, {through: Product_activity, foreignKey: 'activity_id', otherKey: 'product_id'} )
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
