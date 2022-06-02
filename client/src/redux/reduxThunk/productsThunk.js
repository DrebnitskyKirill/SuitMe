import { initProductsAC } from "../actionCreators/productsAc";

export const initProductsFetch = () => {
  return (dispatch) => {
    fetch("/allcollection")
      .then((res) => res.json())
      .then((data) => dispatch(initProductsAC(data)));
  };
};
