"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          category_id: 1,
          price: 2000,
          title: "Самая лучшая рубашка",
          name: "Белая рубашка",
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 1000,
          title: "Не самая лучшая рубашка",
          name: "Синяя рубашка",
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 6666,
          title: "Педали твоего дедушки",
          name: "Ботинки черные",
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 45000,
          title: "Смокинг на похороны",
          name: "Смокинг черный",
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
