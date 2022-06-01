import React from "react";
import { useSelector } from "react-redux";
import style from "./home.module.css";

function FirstThings() {
  const { allProducts, orders } = useSelector((store) => store.products);
  // console.log(orders[0]?.start_rent);
  // console.log(allProducts[0]);

  const values = (e) => {
    const val = e.event.target.value
  }
  return (
    <form className={style.first} onSubmit={values}>
      <div className={style.firstBloc}>
        <h2>Я выбираю</h2>
        <select>
          <option>СОБЫТИЕ</option>
          <option>СВАДЬБА</option>
          <option>ВЫПУСКНОЙ ВЕЧЕР</option>
          <option>ВАЖНОЕ СОБЫТИЕ</option>
        </select>
        <h2>на</h2>
        <input type="date" name='date' className={style.calendar} />
      </div>
      <div className={style.buttonFlex}>
        <button type="submit" className={style.buttonFirst}>НАЧАТЬ</button>
      </div>
    </form>
  );
}

export default FirstThings;
