import { initOrderAC, initProductsAC } from "../actionCreators/productsAc";

export const initProductsFetch = () => {
  return (dispatch) => {
    fetch("/allcollection")
      .then((res) => res.json())
      .then((data) => dispatch(initProductsAC(data)));
  };
};
export const showOrdersFetch = () => {
  return (dispatch) => {
    fetch("/allOrder")
      .then((res) => res.json())
      .then((data) => dispatch(initOrderAC(data)));
  };
};
