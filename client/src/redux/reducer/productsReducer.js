import { INIT_PRODUCTS } from '../actionType/productsAt';

const initialState = { allProducts: [],categories:[], activiti:[]}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_PRODUCTS:
     return {...state, allProducts:action.payload.allProducts, categories:action.payload.categories, activiti:action.payload.activiti}

     
    default:
      return state
  }
}
