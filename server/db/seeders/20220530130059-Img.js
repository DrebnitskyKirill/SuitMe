"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Imgs", [
      {
        product_id: 1,
        name: "https://m.buro247.ru/images/2019/08/1567087932921836.jpg.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        name: "https://images.izi.ua/125092641",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        name: "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2413771_botinki_dr__martens_14353001_chernyy_kozha_natural_naya.JPG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        name: "https://albione.ru/upload/resize_cache/iblock/dca/900_1350_1/dca3face351bc9ac390322b198cfb570.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Imgs", null, {});
  },
};
