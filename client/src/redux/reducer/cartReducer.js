import { ADD_PRODUCT_CARD, DEL_PRODUCT_CARD } from "../actionType/cartAT";

const initialState = { cart: [], totalCost: 0 };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CARD:
      const copyCart = [...state.cart];
      let newCart = copyCart;
      const copyTotalCost = state.totalCost;
      let newTotalCost = copyTotalCost;
      function is(element, index, array) {
        return element.id === action.payload.product.id;
      }
      let uniqueProduct = copyCart.some(is);
      if (!uniqueProduct) {
        newTotalCost = copyTotalCost + action.payload.product.price;
        newCart = [...copyCart, action.payload.product];
      }

      return { ...state, cart: newCart, totalCost: newTotalCost };

    case DEL_PRODUCT_CARD:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload.id),
        totalCost: state.totalCost - action.payload.price,
      };

    default:
      return state;
  }
};
