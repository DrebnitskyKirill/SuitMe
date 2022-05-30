import React from 'react';
import style from '../CardParams/s.module.css'

function CardParams(props) {
  const data = {
    price: 2000,
    title: 'Все начинается с накрахмаленной белой классической рубашки. Идеальная основа, ее можно легко одеть или одеть в зависимости от вашего мероприятия, возможности безграничны.',
    name: 'Белая рубашка',
    Colors: { name: 'red' },
    Sizes: [{ id: 1, name: 'XS' }, { id: 2, name: 'S' }]
  }
  return (
    <div className={style.card}>
      <div >
        <div>
        </div>
        <div className={style.imgDiv}>
          <div className={style.smallImg}>
            <img width='90' height='100' src="https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875"/>
            <img width='90' height='100' src="https://static.theblacktux.com/products/shirts/white-dress-shirt/2_06_CLBBP_2836_F_1812x1875.jpg?width=845&height=875"/>
            <img width='90' height='100' src="https://static.theblacktux.com/products/shirts/white-dress-shirt/3_06_CLBBP_2898_F_1812x1875.jpg?width=845&height=875" />
          </div>
          <div className={style.bigImg}>
          <img width='429' height='529 ' src="https://static.theblacktux.com/products/shirts/white-dress-shirt/3_06_CLBBP_2898_F_1812x1875.jpg?width=845&height=875" />
          </div>
        </div>
      </div>
      <div className={style.discrabeDiv}>
        <div>{data.name}</div>
        <div>
          <h5>1 Выберите тип заказа</h5>
          <div>
            <button className={style.checkButton} >Арендовать {data.price}</button>
          </div>
          <div>
            <button className={style.checkButton} disabled>Купить<p>скоро будет доступно</p></button>
          </div>
        </div>
        <div>
          <h5>1 ВЫБЕРИТЕ ТИП ЗАКАЗА</h5>
          <button className={style.rendButton}>Заказать</button>
        </div>
        <div>
          <h6 className={style.h6}> РАЗМЕР </h6>
          <p>Воротник 14–20, рукав 31–39 (только нечетные размеры). Узкая или классическая посадка.
            Наша викторина Fit Finder поможет вам найти правильные размеры до оформления заказа.
          </p>
        </div>
        <div>
          <h6 className={style.h6}>ПОДРОБНОСТИ</h6>
          <p>
            Все начинается с накрахмаленной белой классической рубашки. Идеальная основа, ее можно легко одеть
            или одеть в зависимости от вашего мероприятия, возможности безграничны.
            100% тонкий хлопок
            Трансформируемые манжеты-бочонки (подходят запонки)
            Трансформируемая передняя планка (подходит для заклепок на пуговицах)
          </p>
        </div>
      </div>
      </div>
  );
}

export default CardParams;
