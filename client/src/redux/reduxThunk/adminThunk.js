import { addAdminAC, initColorAC } from "../actionCreators/adminAC";
import { searchProductAC } from "../actionCreators/adminAC";
import { editProductAC } from "../actionCreators/adminAC";
import { initSizeAC } from "../actionCreators/adminAC";

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

export const searchProductFetch = (payload) => {
  return (dispatch) => {
    fetch("/searchProduct", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(searchProductAC(data)));
  };
};

export const editProductFetch = (payload) => {
  return (dispatch) => {
    fetch("/editProduct", {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(editProductAC(data)));
  };
};

export const initSizeFetch = () => {
  return (dispatch) => {
    fetch("/createProduct/allSize")
      .then((res) => res.json())
      .then((data) => dispatch(initSizeAC(data)));
  };
};
export const initColorFetch = () => {
  return (dispatch) => {
    fetch("/createProduct/allColor")
      .then((res) => res.json())
      .then((data) => dispatch(initColorAC(data)));
  };
};
