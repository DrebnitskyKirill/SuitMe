import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProductFetch } from "../../../redux/reduxThunk/adminThunk";

export default function AdminSearch() {
  const dispatch = useDispatch();
  const dataSearch = (e) => {
    e.preventDefault();
    const value = e.target.input.value;
    dispatch(searchProductFetch({name: value}));
  };
  

  return (
    <>
      <form onSubmit={dataSearch} className='container center'>
        <div className="searchbar">
          <input
            id="input"
            type="text"
            className="form-control"
            placeholder="Поиск товара..."
          />
          <button type="submit" className="btn btn-success">Поиск</button>
        </div>
      </form>
      
    </>
  );
}
