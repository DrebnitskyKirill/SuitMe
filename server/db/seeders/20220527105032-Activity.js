"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Activities",
      [
        {
          name: "Свадьба",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Выпускной вечер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Вожное событие",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Activities", null, {});
  },
};
