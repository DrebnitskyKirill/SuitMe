'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [
      {
      name: 'Ботинки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Рубашки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Костюмы',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
