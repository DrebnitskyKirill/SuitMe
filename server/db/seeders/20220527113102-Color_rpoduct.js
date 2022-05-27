'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_colors', [
      {
        product_id: 1,
        color_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        color_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        color_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_colors', null, {});
  }
};
