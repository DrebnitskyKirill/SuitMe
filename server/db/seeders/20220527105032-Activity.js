"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Activities",
      [
        {
          name: "Свадьбу",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Выпускной вечер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Важное событие",
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
