'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {

    static associate({ Product_size, Product }) {
      this.belongsToMany(Product, {through: Product_size, foreignKey: 'size_id', otherKey: 'product_id'} )
    }
  }
  Size.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};
