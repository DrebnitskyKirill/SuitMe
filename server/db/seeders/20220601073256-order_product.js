'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order_products', [
      {
        order_id: 1,
        product_id: 3,
        size_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 1,
        size_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 4,
        size_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Order_products', null, {});
  }
};
