'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Colors', [
      {
        name: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Midnight Blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Black',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'White',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brown',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Colors', null, {});

  }
};
