import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

function FirstThings() {
  const { allProducts } = useSelector((store) => store.products);
  const { allOrder } = useSelector((store) => store.order);
  const { activiti } = useSelector((store) => store.products);
  const navigate = useNavigate();
  const filtrEvent = (e) => {
    e.preventDefault()
    navigate(`/collection/${e.target.select.value}`)
  }
  return (
    <form className={style.first} onSubmit={filtrEvent}>
      <div className={style.firstBloc}>
        <h2>Я выбираю образ на: </h2>
        <select name="select">
          {activiti.map(el => <option value={el.id}>{el.name}</option>)}
        </select>
      </div>
      <div className={style.buttonFlex}>
        <button type="submit" className={style.buttonFirst}>НАЧАТЬ</button>
      </div>
    </form>
  );
}

export default FirstThings;
