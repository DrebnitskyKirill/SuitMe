"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          category_id: 3,
          price: 9990,
          title: `В буквальном смысле это вершина формального стиля. 
          Трудно превзойти классический, но эффектный вид смокинга с остроконечными лацканами, 
          а загнутые вверх лацканы обрамляют ваше лицо и удлиняют фигуру. Победа, победа. 
          В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.
          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на одну кнопку
          • 100% шелковый атлас с остроконечными лацканами
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Смокинг с острыми лацканами",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Вот он: смокинг с лацканами, который вы так долго искали. 
          Современный взгляд на культовый смокинг, он отлично смотрится в паре с 
          классическим черным галстуком-бабочкой или с чем-то более уникальным. 
          Ты. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.
          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Лацканы из 100% шелка и атласа
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Смокинг с вырезом на лацкане",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Шали не только для маленьких старушек. 
          Этот смокинг с шалевым воротником выглядит одновременно свежим и классическим и 
          идеально подходит для тех случаев, когда вы хотите немного выделиться. 
          В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.
          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на одну кнопку
          • Шалевый воротник из 100% шелкового атласа
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Cмокинг с шалевым воротником",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Подобно облаку, проплывающему перед полуденным солнцем, этот светло-серый костюм обеспечивает идеальную тень, чтобы стильно провести любое мероприятие. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Лацканы с вырезом
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Светло-серый костюм",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Авраам Линкольн сказал, что невозможно все время угождать всем людям, но он говорил не с серым костюмом. Вы можете носить средний серый цвет круглый год. Он одновременно классический и современный, легкий и изысканный. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Лацканы с вырезом
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Смокинг серый",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9900,
          title: `Этот темно-серый костюм, вероятно, является самым универсальным из наших образов. Его можно носить как в более широком, так и в распущенном виде в зависимости от вашего стиля и мероприятия. Некоторые могут назвать его хамелеоном официальной одежды. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Лацканы с вырезом
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Темно-серый костюм",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Авраам Линкольн сказал, что невозможно все время угождать всем людям, но он говорил не с серым костюмом. Вы можете носить средний серый цвет круглый год. Он одновременно классический и современный, легкий и изысканный. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Лацканы с вырезом
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Серый костюм",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Освежитесь в идеальном коричневом костюме. Отлично подходит для мероприятий в теплую погоду, он может быть серьезным или непринужденным, как и аксессуары, с которыми вы его сочетаете. Этот эксклюзивный стиль был разработан Ovadia & Sons для The Black Tux. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Лацканы с вырезом
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Светло-коричневый костюм",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Белый смокинг с черными лацканами — классический образ. Первоначально альтернатива черному смокингу для теплой погоды, в наши дни смокинг с контрастной шалью сохраняет прохладу в любом климате. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на две пуговицы
          • Воротник из шелковой шали в крупный рубчик
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Белый смокинг с черными лацканами",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Полночно-синий — один из самых популярных цветов смокинга, и на то есть веские причины. Темно-синий оттенок позволяет ненавязчиво выделиться из толпы, и не помешает, что он также отлично смотрится на всех. Мы добавили к этой версии шалевый воротник, чтобы придать изюминку — вы обязательно получите комплименты.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на одну кнопку
          • Шалевый воротник из 100% шелкового атласа
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Полуночный смокинг с шалью",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 9990,
          title: `Нам очень нравится этот легкий бархатный смокинг. Благодаря богатой текстуре и эффектному шалевому воротнику вы обязательно будете выделяться по всем правильным причинам. В комплекте куртка и штаны. Брюки представлены в классическом и приталенном крое.

          • 76% хлопок, 24% бамбук
          • Застежка на две пуговицы
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью собран`,
          name: "Бархатная куртка-смокинг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 1999,
          title: `Все уши прикованы к вам взглядом, которому есть что рассказать. Заостренные атласные лацканы добавляют интриги черной шерсти, которая утопает в очаровательных белых точках. Включает в себя смокинг в горошек и классические черные брюки-смокинги.

          • 100% мериносовая шерсть
          • Закрытие одной кнопкой
          • 100% шелковый атлас с острыми лацканами
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Пиджак с острыми лацканами из оникса в горошек",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 40000,
          title: `Все уши прикованы к вам взглядом, которому есть что рассказать. Заостренные атласные лацканы добавляют интриги черной шерсти, которая утопает в очаровательных белых точках. Включает в себя смокинг в горошек и брюки в тон.

          • 100% мериносовая шерсть
          • Закрытие одной кнопкой
          • 100% шелковый атлас с острыми лацканами
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Смокинг с заостренными лацканами в горошек из оникса",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Почувствуйте все чувства во взгляде, который, не колеблясь, позволит ему сиять. Насыщенные красные тона этого шалевого жакета способны осветить комнату. Включает в себя бордовый смокинг и классические черные брюки-смокинги.

          • 97% мериносовая шерсть, 3% эластан
          • Закрытие одной кнопкой
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Темно-красный пиджак с отложным воротником-смокинг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Это одна слива, которая всегда в сезоне. Идеальный оттенок пыльно-фиолетового гарантированно будет вызывать комплименты весь день, всю ночь и вплоть до истечения срока действия ваших Insta Stories. Включает сливовый смокинг и классические черные брюки-смокинги для вечернего образа.

          • 97% мериносовая шерсть, 3% эластан
          • Застежка на одну кнопку
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Пиджак с отложным воротником сливового цвета Смокинг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Это одна слива, которая всегда в сезоне. Идеальный оттенок пыльно-фиолетового гарантированно будет вызывать комплименты весь день, всю ночь и вплоть до истечения срока действия ваших Insta Stories. Включает в себя соответствующую сливовую куртку и брюки для смелого образа для вечеринки.

          • 97% мериносовая шерсть, 3% эластан
          • Застежка на одну кнопку
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Смокинг с шалью цвета сливы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //17
          category_id: 3,
          price: 10999,
          title: `Этот смокинг в шотландскую клетку украшен традиционным рисунком «Черные часы», который придает сдержанный интерес при слабом освещении. Модель из шерсти с черными атласными остроконечными лацканами. В комплекте с брюками-смокингом в шотландскую клетку Black Watch, создающими смелый образ. Брюки представлены в классическом и приталенном крое.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на одну кнопку
          • 100% шелковый атлас с остроконечными лацканами
          • Полностью собран
          • Боковые вентиляционные отверстия`,
          name: "Черный смокинг в шотландскую клетку",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Этот смокинг — магнит двойного действия. Насыщенные оттенки драгоценных камней нашего изумрудного смокинга с шалью создают идеальный образ для вечеринки, которым невозможно не восхищаться. Включает в себя соответствующую изумрудную куртку и брюки.

          • 97% мериносовая шерсть, 3% эластан
          • Застежка на одну кнопку
          • Шалевый воротник
          • Полностью собран
          • Боковые вентиляционные отверстия
          • Не для свадеб`,
          name: "Изумрудный смокинг с шалью",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Остальная часть вечеринки позеленеет от зависти, когда увидит, как великолепно вы выглядите в этом зеленом смокинге из бархатной куртки. Разработанный, чтобы привлечь к себе внимание, невозможно не провести время своей жизни в этом. Включает в себя плюшевый бархатный смокинг и классические черные брюки-смокинги.

          • 100% хлопок бархат
          • Застежка на одну кнопку
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Зеленая бархатная куртка-смокинг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Взгляните на все это взглядом, который появляется однажды в светло-голубой луне. Воротник-шаль характерного синего цвета без особых усилий становится стилем, на который стоит обратить внимание. Включает голубой смокинг и классические черные брюки-смокинги.

          • 97% мериносовая шерсть, 3% эластан
          • Закрытие одной кнопкой
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Голубой жакет с отложным воротником",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Взгляните на все это взглядом, который появляется однажды в светло-голубой луне. Воротник-шаль характерного синего цвета без особых усилий становится стилем, на который стоит обратить внимание. Включает в себя подходящую светло-голубую куртку и брюки.

          • 97% мериносовая шерсть, 3% эластан
          • Закрытие одной кнопкой
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Голубой смокинг с отложным воротником",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Шоу стоппер, начало разговора. Простой, тонкий рисунок этого монохромного синего смокинга привнесет в вас веселье. Включает в себя соответствующую куртку и брюки.

          • 100% супертонкая итальянская мериносовая шерсть.
          • Застежка на одну кнопку
          • Шалевый воротник
          • Полностью собран
          • Боковые вентиляционные отверстия
          • Не для свадеб`,
          name: "Синий смокинг с отложным воротником",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Отправляйтесь за «золотом» в нашем смокинге с шалем из календулы. Этот идеальный оттенок пыльно-желтого будет приносить вам комплименты весь день, всю ночь и вплоть до истечения срока действия ваших историй в Insta Stories. Включает смокинг цвета календулы и классические черные брюки-смокинги для вечернего образа.

          • 97% мериносовая шерсть, 3% эластан
          • Застежка на одну кнопку
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Пиджак с отложным воротником из календулы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Все начинается с накрахмаленной белой классической рубашки. Идеальная основа, ее можно легко надеть или снять в зависимости от вашего мероприятия, возможности безграничны.

          • 100% тонкий хлопок
          • Трансформируемые манжеты-бочонки (подходят запонки)
          • Трансформируемая передняя планка (подходит для заклепок на пуговицах)`,
          name: "Хлопковая классическая рубашка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          price: 10999,
          title: `Отправляйтесь за «золотом» в нашем смокинге с шалем из календулы. Этот идеальный оттенок пыльно-желтого будет приносить вам комплименты весь день, всю ночь и вплоть до истечения срока действия ваших историй в Insta Stories. Включает в себя подходящую куртку с календулой и брюки для смелого образа для вечеринки.

          • 97% мериносовая шерсть, 3% эластан
          • Застежка на одну кнопку
          • Шалевый воротник
          • Боковые вентиляционные отверстия
          • Полностью проверено`,
          name: "Смокинг с календулой и шалью из календулы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Иногда хочется оставить немного воображению. Вот почему мы разработали эту сдержанную классическую рубашку с ширинкой спереди, полурасстегнутым воротником и потайной планкой, закрывающей пуговицы.

          • 100% тонкий хлопок
          • Французские манжеты
          • Потайная планка
          • Включает шелковые запонки с узлом`,
          name: "Хлопковая классическая рубашка с отворотами",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Культовая рубашка-смокинг необходима для полного образа в стиле black tie. Эта четкая рубашка имеет классический воротник-стойку (предназначенный для галстука-бабочки) и плиссированный нагрудник спереди (который гораздо более стильный, чем тот, что носят младенцы).

          • 100% тонкий хлопок
          • Трансформируемые манжеты-бочонки (подходят запонки)
          • Трансформируемая передняя планка (подходит для заклепок на пуговицах)`,
          name: "Хлопковая рубашка с длинными рукавами",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Этот культовый вариант классической рубашки-смокинга заменяет передний нагрудник современной потайной планкой, но сохраняет формальный воротник-стойку, необходимый для завершения любого образа с черным галстуком.

          • 100% тонкий хлопок
          • Потайная планка
          • Включает шелковые запонки с узлом
          • Французские манжеты`,
          name: "Классическая рубашка с вырезом спереди и воротником-стойкой",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Современная интерпретация классики. Эта четкая рубашка-смокинг имеет отложной воротник, плиссированный нагрудник и потайную планку, скрывающую пуговицы.

          • 100% тонкий хлопок
          • Отложной воротник
          • Потайная планка
          • Узкий плиссированный нагрудник
          • Французские манжеты
          • Включает шелковые запонки с узлом`,
          name: "Рубашка с плиссированным воротником",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Иногда блюз — это хорошо. Эта бледно-голубая рубашка добавит вашему образу неожиданных ярких красок и станет идеальной основой для демонстрации вашего галстука.
          • 100% тонкий хлопок
          • Трансформируемые манжеты-бочонки (подходят запонки)
          • Не принимает заклепки-пуговицы`,
          name: "Синяя классическая рубашка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Заявите о себе в этой черной хлопковой классической рубашке — современная интерпретация классики и идеальная основа для демонстрации ваших аксессуаров. Переход на темную сторону никогда не выглядел лучше..
          • 100% тонкий хлопок
          • Трансформируемая передняя планка (подходит для заклепок на пуговицах)
          • Трансформируемые манжеты-бочонки (подходят запонки)`,
          name: "Черная классическая рубашка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Если вы играете в бильярд, вы либо полосатые, либо сплошные. Когда дело доходит до вашего наряда, вам не нужно выбирать сторону. Сочетайте этот неподвластный времени топ с любым галстуком и наблюдайте, как тонкие полоски подчеркивают ваш галстук.

          • 100% тонкий хлопок
          • Трансформируемые манжеты-бочонки (подходят запонки)
          • Не принимает заклепки-пуговицы`,
          name: "Синяя полосатая рубашка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          price: 3999,
          title: `Это не все черное или белое. Иногда он розовый и чертовски хорошо выглядит. Эта яркая рубашка добавит вашему образу неожиданных ярких красок и станет идеальной основой для демонстрации вашего галстука.

          • 100% тонкий хлопок
          • Трансформируемые манжеты-бочонки (подходят запонки)
          • Не принимает заклепки-пуговицы`,
          name: "Розовая классическая рубашка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 5999,
          title: `Поставьте свою лучшую ногу вперед. Эти классические туфли дерби подойдут для любого делового образа. Носите их с одним из наших костюмов, чтобы создать неподвластный времени стиль.

          • Кожаный верх
          • Резиновая подошва
          • С любовью поддерживается нашими сапожниками`,
          name: "Коричневые кожаные туфли",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 5999,
          title: `Поставьте свою лучшую ногу вперед. Эти классические туфли дерби подойдут для любого делового образа. Носите их с одним из наших смокингов, чтобы создать неподвластный времени стиль.

          • Кожаный верх
          • Резиновая подошва
          • С любовью поддерживается нашими сапожниками`,
          name: "Черные кожаные туфли",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 5999,
          title: `Время сиять. Эти оксфорды из лакированной кожи с острым носком созданы для того, чтобы подчеркнуть стиль любого делового образа (не говоря уже о том, что они привлекают внимание на танцполе). Эта обувь в настоящее время доступна только в ограниченном количестве в размерах 8-15.

          • Верх из лакированной кожи и телячьей кожи
          • Резиновая подошва
          • С любовью поддерживается нашими сапожниками`,
          name: "Туфли Cap Toe из лакированной кожи/телячьей кожи",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 5999,
          title: `Время сиять. Эти туфли дерби из лакированной кожи созданы для того, чтобы придать стильный вид любому формальному образу (не говоря уже о том, что они привлекают внимание на танцполе).

          • Верх из лакированной кожи
          • Резиновая подошва
          • С любовью поддерживается нашими сапожниками`,
          name: "Черные туфли из лакированной кожи",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 5999,
          title: `Знаете, как говорят: противоположности притягиваются. Гладкая черная кожа и подошва из натурального дерева идеально дополняют классические туфли.

          • Кожаный верх
          • Деревянная подошва
          • С любовью поддерживается нашими сапожниками`,
          name: "Черная кожаная деревянная подошва",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          price: 5999,
          title: `Этот бездельник не берет выходных. Носите эти классические модели формальной одежды с одним из наших смокингов, чтобы создать неподвластный времени стиль.

          • Верх из кожи с союзкой в ​​крупный рубчик
          • Резиновая подошва
          • С любовью поддерживается нашими сапожниками`,
          name: "Черные лоферы",
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
