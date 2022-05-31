import { INIT_PRODUCTS } from '../actionType/productsAt';

const initialState = { allProducts: [], suits: [], shoes: [], shirts: [] }

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_PRODUCTS:
     return {...state, allProducts:[action.payload.suits, action.payload.shoes, action.payload.shirts ].flat(Infinity)}

    default:
      return state
  }
}
