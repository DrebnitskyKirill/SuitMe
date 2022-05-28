import { ADD_PRODUCT } from "../actionType/adminAT";

const initialState = { product: [] };

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload]};
    default:
      return state;
  }
};
