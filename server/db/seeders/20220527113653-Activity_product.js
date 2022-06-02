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
        activity_id: 1,
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

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_activities', null, {});
  }
};
