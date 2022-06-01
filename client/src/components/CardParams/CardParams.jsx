import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './cardParams.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function CardParams() {
  const { id } = useParams()
  const { allProducts } = useSelector(store => store.products)
  const dataProduct = allProducts.filter((el) => el.id === +id)
  const url = dataProduct[0].Imgs.map((el) => `http://localhost:4000${el.name}`)
  return (
    <>
      <div className={style.card}>
        <div className={style.imgDiv}>
          <Carousel>
            {url.map((el) => {  
              return (
                <div>
                  <img src={el} alt='img' />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className={style.discrabeDiv}>
          <div className={style.text}>
            <p>{dataProduct[0].name}</p>
            <div className={style.line}></div>
            <div >
              <h4>❶ ВЫБЕРИТЕ ТИП ЗАКАЗА</h4>
              <button className={style.checkButton}>Арендовать {dataProduct[0].price} ₽</button>
              <button className={style.checkButton} disabled> Купить 'Скоро будет доступно'</button>
            </div>
            <div>
              <h4 className={style.h4}>ОПИСАНИЕ ТОВАРА</h4>
              <p className={style.title}> {dataProduct[0].title}
              </p>
            </div>
            <div className={style.line}></div>
            <div>
              <h4 className={style.h4}> МЕРОПРИЯТИЕ </h4>
              <p> {dataProduct[0].Activities[0].name} </p> 
            </div>
            <div className={style.line}></div>
            <div>
              <h4 className={style.h4}> ХАРАКТЕРИСТИКА </h4>
              <p> Размер - { dataProduct[0].Sizes.map((el) => <button >{el.name}</button>)} </p>
              <p> Цвет -  {dataProduct[0].Colors[0].name} </p>
            </div>
            <div>
              <button className={style.rendButton}>Добавить в корзину</button>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

export default CardParams;
