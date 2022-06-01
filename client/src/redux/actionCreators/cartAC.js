import { ADD_PRODUCT_CARD, DEL_PRODUCT_CARD } from "../actionType/cartAT";

export const addProductCartAC = (payload) => {
  return {
    type: ADD_PRODUCT_CARD,
    payload,
  };
};

export const delProductCartAC = (payload) => {
  return {
    type: DEL_PRODUCT_CARD,
    payload,
  };
};
