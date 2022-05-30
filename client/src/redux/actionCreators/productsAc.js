import { INIT_PRODUCTS } from '../actionType/productsAt';

export const addProductsAc = (payload) => {
  return {
    type: INIT_PRODUCTS,
    payload,
  }
};
