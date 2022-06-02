import {  INIT_PRODUCTS } from '../actionType/productsAt';

export const initProductsAC = (payload) => {
  return {
    type: INIT_PRODUCTS,
    payload,
  }
};

