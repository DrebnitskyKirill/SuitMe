import React from "react";
import { useDispatch } from "react-redux";
import { searchProductFetch } from "../../../redux/reduxThunk/adminThunk";
import style from './AdminSearch.module.css'

export default function AdminSearch() {
  const dispatch = useDispatch();
  const dataSearch = (e) => {
    e.preventDefault();
    const value = e.target.input.value;
    dispatch(searchProductFetch({name: value}));
  };
  return (
    <div>
      <p className={style.name}>Форма для изменения товара</p>
      <form onSubmit={dataSearch} className=''>
        <div className="">
        <label>Укажите наименование товара:</label>
          <input
            id="input"
            type="text"
            className=""
            placeholder="Поиск товара..."
            autoComplete="off"
          />
          <button type="submit" className={style.buttonForm}>Поиск</button>
        </div>
      </form>
      
    </div>
  );
}
