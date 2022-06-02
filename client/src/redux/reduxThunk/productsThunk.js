import { addAdminAC } from "../actionCreators/adminAC";
import { initProductsAC } from "../actionCreators/productsAc";

export const initProductsFetch = () => {
  return (dispatch) => {
    fetch("/allcollection")
      .then((res) => res.json())
      .then((data) => dispatch(initProductsAC(data)));
  };
};
export const addProductFetch = (payload) => {
  return (dispatch) => {
    fetch("/createProduct", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addAdminAC(data)));
  };
};
