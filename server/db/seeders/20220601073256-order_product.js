'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order_products', [
      {
        order_id: 1,
        product_id: 3,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 1,
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 4,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Order_products', null, {});
  }
};
