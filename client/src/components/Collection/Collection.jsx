import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

function Collection({ typeOfProduct }) {
  const { allProducts } = useSelector(store => store.products)

  return (
    <div>
      {allProducts ? allProducts.map((el) => <Product key={el.id} item={el} />) : <div>No products avaible</div>}
    </div>
  );
}

export default Collection;
