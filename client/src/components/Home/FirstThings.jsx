import React, { useState } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import style from "./home.module.css";

const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function FirstThings() {
  const { allProducts, orders } = useSelector((store) => store.products);
  // console.log(orders[0]?.start_rent);
  // console.log(allProducts[0]);
  
  const [Data, setData] = useState(orders);
  const handleFilterDate = (orders, d) => {
    const filteredData = orders.filter((item) => {
      if (dayjs(item.date).isSameOrAfter(dayjs(orders[0].end_rent))) {
        return item;
      }
    });

    setData(filteredData);
  };
  return (
    <form className={style.first}>
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
        <button  className={style.buttonFirst} onClick={handleFilterDate}>НАЧАТЬ</button>
      </div>
    </form>
  );
}

export default FirstThings;
