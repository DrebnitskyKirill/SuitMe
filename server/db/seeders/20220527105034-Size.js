'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Sizes', [
      {
        name: 'XS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'S',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'M',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'L',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'XL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'XXL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'XXXL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '50',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '49',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '48',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '47',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '46',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '45',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '44',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '43',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '42',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '41',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '40',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '39',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '37',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Sizes', null, {});

  }
};
