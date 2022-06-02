import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardCart from './CardCart';

function Cart() {
 const navigation = useNavigate()
  const {cart,totalCost}=useSelector(state=>state.cart)
    return (
      <>
    <button onClick={() => navigation('/order')}>нажать</button>
    <div>
      {cart.length> 0 ? cart.map(el => <CardCart key={el.id} el={el}/>) :<p>Найдите свой образ
Добавьте предметы, которые вы хотите арендовать, и вернитесь сюда, чтобы управлять своим внешним видом</p>}
    </div>
      </>
  );
}

export default Cart;
