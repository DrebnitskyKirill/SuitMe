import React from 'react';
import style from './home.module.css'

function FirstThings() {
  return (
    <form className={style.first}>
    <div className={style.firstBloc}>
      <h2>Я выбираю</h2>
      <select >
        <option>СОБЫТИЕ</option>
        <option>СВАДЬБА</option>
        <option>ВЫПУСКНОЙ ВЕЧЕР</option>
        <option>ВАЖНОЕ СОБЫТИЕ</option>
      </select>
      <h2>на</h2>
      <input type='date' className={style.calendar}/>
    </div>
    <div className={style.buttonFlex}><button className={style.buttonFirst}>НАЧАТЬ</button></div>
    </form>
  );
}

export default FirstThings;
