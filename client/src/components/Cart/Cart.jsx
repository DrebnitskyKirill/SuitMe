import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardCart from './CardCart';
import style from './Cart.module.css'

function Cart() {
  const navigation = useNavigate()
  const { cart , totalCost} = useSelector(state => state.cart)
  return (
    <>
      <div className={style.cart}>
        <div className={style.listProduct}>
        {cart.length > 0 ? cart.map(el => <CardCart key={el.id} el={el} />) : <p className={style.mainText}>
          Добавьте предметы, которые вы хотите арендовать, и вернитесь сюда, чтобы управлять своим внешним видом</p>}
      </div>
      <div className={style.summ}> Общая стоимость аренды ( 1 день ): {totalCost} ₽</div>
      <div>
        {cart.length > 0 ? <button className={style.button} onClick={() => navigation('/order')}>Заполнить форму заказа</button> :
          <h3>Добавьте товар в корзину!</h3>}
      </div>
      </div>
    </>
  );
}

export default Cart;
