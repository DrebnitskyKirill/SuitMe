import React from 'react';
import { useSelector } from 'react-redux';
import style from '../Product/Product.module.css'
import Product from '../Product/Product';

function Collection({ name }) {
  const { allProducts } = useSelector(store => store.products)
  let filterProductCategory=[]
  if(Number(name)){
    filterProductCategory = allProducts.filter(el => el.Activities[0].id === Number(name))
  }else{
    filterProductCategory = allProducts.filter(el => el.Category.name === name)
  }
  


  return (
    <div className={style.flex}>
  
    <div className={style.listProduct}>
      {filterProductCategory.length > 0 ? filterProductCategory.map((el) => <Product key={el.id} item={el} />) : <div>No products avaible</div>}
    </div>
    </div>
  );
}

export default Collection;
