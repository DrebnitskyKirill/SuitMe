import { addOrderAC, initOrderAC } from "../actionCreators/orderAC";

export const addOrderFetch = (payload) => {
  return (dispatch) => {
    fetch("/order", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addOrderAC(data)));
  };
};
export const showOrdersFetch = () => {
  return (dispatch) => {
    fetch("/order")
      .then((res) => res.json())
      .then((data) => dispatch(initOrderAC(data)));
  };
};
