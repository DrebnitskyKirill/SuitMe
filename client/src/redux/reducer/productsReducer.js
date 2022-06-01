import { INIT_ORDER, INIT_PRODUCTS } from "../actionType/productsAt";

const initialState = {
  allProducts: [],
  suits: [],
  shoes: [],
  shirts: [],
  orders: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return {
        ...state,
        allProducts: [
          action.payload.suits,
          action.payload.shoes,
          action.payload.shirts,
        ].flat(Infinity),
      };
    case INIT_ORDER:
      return { ...state, orders: action.payload.allOrders };
    default:
      return state;
  }
};
