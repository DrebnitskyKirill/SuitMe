import React from 'react';
import i1 from '../img/бабочка.png'
import i3 from '..//img/formal.png'
import i2 from '..//img/рулетка.png'
import style from './home.module.css'

function Steps() {
  return (
    <div className={style.blocSteps}>
    <div><h2>Как это работает</h2></div>
    <div className={style.steps}>
      <div className={style.step}>
        <p>ШАГ 1</p>
        <div className={style.iconsBox}><div className={style.icons}><img src={i1} alt='img' /></div></div>
        <h4>ВЫБЕРИТЕ СТИЛЬ</h4>
        <h5>Выберите один из комплектов, выбранных нашими стилистами, или создайте индивидуальный образ.</h5>
      </div>
      <div className={style.step}>
        <p>ШАГ 2</p>
        <div className={style.iconsBox}><div className={style.icons}><img src={i2} alt='img' /></div></div>
        <h4>ПОЛУЧИТЕ ИДЕАЛЬНУЮ ПОСАДКУ</h4>
        <h5>Пройдите наш опрос, чтобы найти свои размеры полностью онлайн.</h5>
      </div>
      <div className={style.step}>
        <p>ШАГ 3</p>
        <div className={style.iconsBox}><div className={style.icons}><img src={i3} alt='img' /></div></div>
        <h4>ГОТОВЬТЕСЬ К КОМПЛИМЕНТАМ</h4>
        <h5>Ваш заказ прибудит за 10 дней до вашего мероприятия, достаточно времени, чтобы примерить костюм/смокинг.</h5>
      </div>
    </div>
  </div>
  );
}

export default Steps;
