'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    static associate({ Product }) {
      Img.belongsTo(Product,{foreignKey: 'product_id'})
    }
  }
  Img.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "id",
      },
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Img',
  });
  return Img;
};
