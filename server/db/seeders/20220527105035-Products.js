"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          category_id: 2,
          price: 2000,
          title: "Самая лучшая рубашка",
          name: "Белая рубашка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 1000,
          title: "Не самая лучшая рубашка",
          name: "Синяя рубашка",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 6666,
          title: "Педали твоего дедушки",
          name: "Ботинки черные",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 45000,
          title: "Смокинг на похороны",
          name: "Смокинг черный",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 5000,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Смокинг красный",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 52000,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Смокинг белый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 1000,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Смокинг деревенский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 228,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Смокинг четкий",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 1488,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Четкие подкрадули",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 288,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Педали Orig",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 50,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Мечта твоей девушки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 1999,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Для работников КБ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          category_id: 2,
          price: 40000,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Будующая форма Руслана",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 10999,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Рубашка в клетку",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 10999,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Чтоб ноги не потели",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 10999,
          title: "Crafted with a subtle pin dot pattern and black satin shawl collar, this dinner jacket pokes holes in the dated idea that formalwear requires restraint. Includes jacket and pants. Pants are available in classic and slim fits.",
          name: "Безопасный вариант на выпускной",
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
