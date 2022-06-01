import React from 'react';
import { useSelector } from 'react-redux';
import CardCart from './CardCart';
import style from './Cart.module.css'

function Cart() {

  const {cart,totalCost}=useSelector(state=>state.cart)
  console.log(totalCost)
  return (
    <div>
      {cart.length> 0 ? cart.map(el => <CardCart key={el.id} el={el}/>) :<p>Найдите свой образ
Добавьте предметы, которые вы хотите арендовать, и вернитесь сюда, чтобы управлять своим внешним видом</p>}
    </div>
  );
}

export default Cart;
