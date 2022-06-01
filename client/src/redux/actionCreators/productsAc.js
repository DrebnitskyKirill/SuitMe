import { INIT_ORDER, INIT_PRODUCTS } from '../actionType/productsAt';

export const initProductsAC = (payload) => {
  return {
    type: INIT_PRODUCTS,
    payload,
  }
};
export const initOrderAC = (payload) => {
  return {
    type: INIT_ORDER,
    payload,
  };
};
