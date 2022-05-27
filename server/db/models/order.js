'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate({User, Order_product, Product}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsToMany(Product, {through: Order_product, foreignKey: 'order_id', otherKey: 'product_id' } )
    }
  }
  Order.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_rent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    end_rent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
