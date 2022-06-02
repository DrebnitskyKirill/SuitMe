import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Product.module.css'

function Product({ item }) {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/cardProduct/${item.id}`)} className={style.card}>
      <div className={style.blocImg}>
        <img src={`http://localhost:4000${item.Imgs[1].name}`} alt='img' className={style.img}/>
      </div>
      <h3 className={style.textName}>{item?.name}</h3>
      <h3 className={style.textName}>Аренда: {item.price}p</h3>
    </div>
  );
}

export default Product;
