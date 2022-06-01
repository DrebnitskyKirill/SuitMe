import { ADD_ORDER } from "../actionType/orderAT";


export const addOrderAC = (payload) => {
  return {
    type: ADD_ORDER,
    payload,
  };
};
