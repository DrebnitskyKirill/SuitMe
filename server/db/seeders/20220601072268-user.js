'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: '123@mail.ru',
        password: '12345678',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: '1234@mail.ru',
        password: '12345678',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: '12345@mail.ru',
        password: '12345678',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
