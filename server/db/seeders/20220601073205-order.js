'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        address: 'Московский вокзал',
        name: 'Дядя Русик',
        phone: '+79825091864',
        status: 'Выполнен',
        start_rent: '2021-12-10',
        end_rent: '2021-12-13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        address: 'Пушкина',
        name: 'Вася',
        phone: '+71111111111',
        status: 'Ожидает доставку',
        start_rent: '2021-12-20',
        end_rent: '2021-12-23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        address: 'Ленина',
        name: 'Серега Адский',
        phone: '+79824320599',
        status: 'Выполнен',
        start_rent: '2021-12-3',
        end_rent: '2021-12-6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders ', null, {});
  }
};
