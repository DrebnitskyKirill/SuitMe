import actionTypesAdmin from "../actionType/adminAT";

const initialState = { products: [] };

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesAdmin.ADD:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
