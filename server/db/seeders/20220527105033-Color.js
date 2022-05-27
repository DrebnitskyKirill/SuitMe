'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Colors', [
      {
        name: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'black',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'grey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Colors', null, {});

  }
};
