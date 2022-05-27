'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', [
      {
        category_id: 1,
        price: 2000,
        title: 'Самая лучшая рубашка',
        amount: 10,
        name: 'Белая рубашка',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcode7.ru%2Frubashka-oxford-button-down-blue&psig=AOvVaw1a55DdqKBSMbWMzvtLyq3E&ust=1653735223077000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPihwvbB__cCFQAAAAAdAAAAABAD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        price: 1000,
        title: 'Не самая лучшая рубашка',
        amount: 10,
        name: 'Синяя рубашка',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D1%2580%25D1%2583%25D0%25B1%25D0%25B0%25D1%2588%25D0%25BA%25D0%25B0.html&psig=AOvVaw1a55DdqKBSMbWMzvtLyq3E&ust=1653735223077000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPihwvbB__cCFQAAAAAdAAAAABAJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        price: 6666,
        title: 'Педали твоего дедушки',
        amount: 3,
        name: 'Ботинки черные',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%2592%25D0%25B0%25D0%25BB%25D0%25B5%25D0%25BD%25D0%25BA%25D0%25B8&psig=AOvVaw0Y0rMd9Pv3Bh-Af3Ezu6Fq&ust=1653735457975000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMC8gufC__cCFQAAAAAdAAAAABAD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        price: 45000,
        title: 'Смокинг на похороны',
        amount: 3,
        name: 'Смокинг черный',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fotvet.mail.ru%2Fquestion%2F190765757&psig=AOvVaw2NaRZIPrKgU-YAeP1gQ1wV&ust=1653735603142000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjsxKzD__cCFQAAAAAdAAAAABAD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
