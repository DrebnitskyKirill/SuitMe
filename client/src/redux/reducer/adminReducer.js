import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  INIT_COLOR,
  INIT_SIZE,
  SEARCH_PRODUCT,
} from "../actionType/adminAT";
const initialState = { product: [], size: [], color: [] };

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
      case INIT_SIZE:
        return {
          ...state, size: action.payload.allSize
        }
        case INIT_COLOR:
        return {
          ...state, color: action.payload.allColor
        }
    default:
      return state;
  }
};
