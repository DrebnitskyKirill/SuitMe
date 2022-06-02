'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Product_activities', [
      {
        product_id: 1,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 11,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 12,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 13,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 14,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 15,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 16,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 17,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 18,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 19,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 20,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 21,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 22,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 23,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 24,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 25,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 26,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 27,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 28,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 29,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 30,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 31,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 32,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 33,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 34,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 35,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 36,
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 37,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 38,
        activity_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 39,
        activity_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_activities', null, {});
  }
};
