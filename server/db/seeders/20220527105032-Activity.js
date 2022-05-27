'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Activities', [
      {
        name: 'Wedding',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Funeral',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
       
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Activities', null, {});

  }
};
