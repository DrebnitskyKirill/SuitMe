"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Imgs", [
      {
        product_id: 1,
        name: "/photo/1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        name: "/photo/Рубашка-синяя-фактурная-Vester-70714S_09.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        name: "/photo/hdr-black-10-jpg-7-800x800.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        name: "/photo/s1200.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        name: "/photo/61a494010ffa67ef9a1267820dbe7994.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        name: "/photo/7-kolhoznyh-stilej-v-odezhde-zachem-narod-sam-sebja-vystavljaet-na-smeh-9.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        name: "/photo/02eb11cb0192ef0aab2c96e415d93081.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        name: "/photo/1468154320170042693.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        name: "/photo/7-kolhoznyh-stilej-v-odezhde-zachem-narod-sam-sebja-vystavljaet-na-smeh-7.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        name: "/photo/7-kolhoznyh-stilej-v-odezhde-zachem-narod-sam-sebja-vystavljaet-na-smeh-11.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 11,
        name: "/photo/20180705053258836923cf0_650x650.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 12,
        name: "/photo/GWT000971-2-01-1200Wx1200H.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 13,
        name: "/photo/Pyaterochka-IMG_0912.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 14,
        name: "/photo/5S8A1616-TP.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 15,
        name: "/photo/beec9b1s-960.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 16,
        name: "/photo/08.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Imgs", null, {});
  },
};
