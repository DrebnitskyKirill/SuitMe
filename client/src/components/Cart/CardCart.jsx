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
        <img src="http://localhost:3000/photo/..." alt="img" />
      </div>
      <p>{el.name}</p>
    </div>
  );
}

export default CardCart;
