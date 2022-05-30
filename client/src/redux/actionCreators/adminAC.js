import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  SEARCH_PRODUCT,
  INIT_SIZE,
  INIT_COLOR
} from "../actionType/adminAT";

export const addAdminAC = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};
export const searchProductAC = (payload) => {
  return {
    type: SEARCH_PRODUCT,
    payload,
  };
};
export const editProductAC = (payload) => {
  return {
    type: EDIT_PRODUCT,
    payload,
  };
};
export const initSizeAC = (payload) => {
  return {
    type: INIT_SIZE,
    payload,
  };
};
export const initColorAC = (payload) => {
  return {
    type: INIT_COLOR,
    payload,
  };
};
