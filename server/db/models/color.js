'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {

    static associate({ Product_color, Product }) {
      this.belongsToMany(Product, {through: Product_color, foreignKey: 'color_id', otherKey: 'product_id'} )
    }
  }
  Color.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
