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
        activity_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
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
