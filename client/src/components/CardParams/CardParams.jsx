import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import style from './cardParams.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function CardParams() {
  const { id } = useParams()
  const { allProducts } = useSelector(store => store.products) 
  console.log('=======>', allProducts);
  const dataProduct = allProducts.filter((el) => el.id === +id)
 
  
  return (
    <>
    <div className={style.card}>
    <div className={style.imgDiv}>
    <Carousel>
      <div>
        <img src="https://static.theblacktux.com/products/shirts/white-dress-shirt/2_06_CLBBP_2836_F_1812x1875.jpg?width=845&height=875" />
        <p className="">Legend 1</p>
      </div>
      <div>
        <img src="https://static.theblacktux.com/products/shirts/blue-dress-shirt/2_161129_TBT_Ecom_Light_Blue_Shirt_0489_w1_1812x1875.jpg?width=845&height=875" />
        <p className="">Legend 2</p>
      </div>
      <div>
        <img src="https://static.theblacktux.com/products/shirts/wing-collar-fly-front-shirt/2_161129_TBT_Ecom_Wing_Collar_Shirt_2360_w1_1812x1875.jpg?width=845&height=875" />
        <p className="">Legend 3</p>
      </div>
    </Carousel>
    </div>
      <div className={style.discrabeDiv}>
        <div className={style.text}>
        <p>Grey Suit Vest</p>
        <div >
          <h5>1 Выберите тип заказа</h5>
          <button className={style.checkButton}>Арендовать</button>
          <button className={style.checkButton} disabled> Купить 'Скоро будет доступно'</button>
        </div>
        <div>
          <h5>1 Выберите тип товара</h5>
          <button className={style.rendButton}>Добавить в список</button>
        </div>
        <div>
          <h5 className={style.h5}> РАЗМЕР </h5>
          <p>Воротник 14–20, рукав 31–39 (только нечетные размеры). Узкая или классическая посадка.
            Наша викторина Fit Finder поможет вам найти правильные размеры до оформления заказа.
          </p>
        </div>
        <div>
          <h5 className={style.h5}>ОПИСАНИЕ</h5>
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
      </div>
    </>
  )
}

export default CardParams;
