import React from "react";
import { useDispatch } from "react-redux";
import { delProductCartAC } from "../../redux/actionCreators/cartAC";
import style from "./Cart.module.css";


function CardCart({ el }) {
  const dispatch = useDispatch();

  const delProduct = () => {
    dispatch(delProductCartAC(el));
  };
  return (
    <div className={style.cartCard}>
      <p className={style.closeButton} onClick={delProduct}>
        &times; 
      </p>
      <div className={style.cartImg}>
        <img src={`http://localhost:3000${el.Imgs[0].name}`} alt="img" />
      </div>
      <p className={style.cartText}>{el.name}</p>
      <p className={style.price}>Цена аренды: {el.price} ₽</p>
    </div>
  );
}

export default CardCart;
