'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_colors', [
      {
        product_id: 1,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        color_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        color_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        color_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        color_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        color_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        color_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        color_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 11,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 12,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 13,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 14,
        color_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 15,
        color_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 16,
        color_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 17,
        color_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 18,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 19,
        color_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 20,
        color_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 21,
        color_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 22,
        color_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 23,
        color_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 24,
        color_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 25,
        color_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 26,
        color_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 27,
        color_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 28,
        color_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 29,
        color_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 30,
        color_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 31,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 32,
        color_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 33,
        color_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 34,
        color_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 35,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 36,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 37,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 38,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 39,
        color_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_colors', null, {});
  }
};
