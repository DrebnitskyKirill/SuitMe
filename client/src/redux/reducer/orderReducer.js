import { ADD_ORDER, INIT_ORDER } from "../actionType/orderAT";

const initialState = { allOrder: [] };

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, allOrder: action.payload };
    case INIT_ORDER:
      return { ...state, allOrder: action.payload };
    default:
      return { state };
  }
};
