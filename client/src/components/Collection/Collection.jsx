import React from "react";
import { useSelector } from "react-redux";
import style from "../Product/Product.module.css";
import Product from "../Product/Product";

function Collection({ name }) {
  const { allProducts } = useSelector((store) => store.products);
  const filterProductCategory = allProducts.filter(
    (el) => el.Category.name === name
  );
  return (
    <>
     {name.length > 2 && <div><img src={`http://localhost:4000/photo/${name}.webp`}/></div>}
    <div className={style.flex}>
      <div className={style.listProduct}>
        {filterProductCategory ? (
          filterProductCategory.map((el) => <Product key={el.id} item={el} />)
        ) : (
          <div>No products avaible</div>
        )}
      </div>
    </div>
    </>
  );
}

export default Collection;
