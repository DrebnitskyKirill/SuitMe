'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Product_sizes', [
      {
        product_id: 1,
        size_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        size_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        size_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Product_sizes', null, {});

  }
};
