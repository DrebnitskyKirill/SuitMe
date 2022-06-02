import { ADD_ORDER, INIT_ORDER } from "../actionType/orderAT";

export const addOrderAC = (payload) => {
  return {
    type: ADD_ORDER,
    payload,
  };
};
export const initOrderAC = (payload) => {
  return {
    type: INIT_ORDER,
    payload,
  };
};
