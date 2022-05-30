import { INIT_PRODUCTS } from '../actionType/productsAt';

const initialState = { suits: [], shoes: [], shirts: [] }

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_PRODUCTS:
      state = action.payload;
      return state

    default:
      return state
  }
}
