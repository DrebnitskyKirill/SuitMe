"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      Order,
      Size,
      Color,
      Activity,
      Category,
      Product_color,
      Product_size,
      Product_activity,
      Order_product,
      Img
    }) {
      this.belongsToMany(Order, {
        through: Order_product,
        foreignKey: "product_id",
        otherKey: "order_id",
      });
      this.belongsToMany(Size, {
        through: Product_size,
        foreignKey: "product_id",
        otherKey: "size_id",
      });
      this.belongsToMany(Color, {
        through: Product_color,
        foreignKey: "product_id",
        otherKey: "color_id",
      });
      this.belongsToMany(Activity, {
        through: Product_activity,
        foreignKey: "product_id",
        otherKey: "activity_id",
      });
      this.belongsTo(Category, { foreignKey: "category_id" });
      this.hasMany(Img, {foreignKey: 'product_id'})
    }
  }
  Product.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
