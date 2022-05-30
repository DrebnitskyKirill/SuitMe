import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

function Collection({ typeOfProduct }) {
  const items = useSelector(store => {
    if (typeOfProduct) {
      return store.products[typeOfProduct]
    } else {
      const preResult = Object.values(store.products)
      const result = preResult.flat(Infinity)
      return result
    }
  })

  return (
    <div>
      {items ? items.map((el) => <Product key={el.id} item={el} />) : <div>No products avaible</div>}
    </div>
  );
}

export default Collection;
