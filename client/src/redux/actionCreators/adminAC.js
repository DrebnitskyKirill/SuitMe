import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  SEARCH_PRODUCT,
  INIT_SIZE,
  INIT_COLOR,
  ADD_PHOTO,
  INIT_ACTIVITY,
  EDIT_PHOTO,
 
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
export const initActivityAC = (payload) => {
  return {
    type: INIT_ACTIVITY,
    payload,
  };
};
export const addPhotoAC = (payload) => {
  return {
    type: ADD_PHOTO,
    payload,
  };
};
export const editPhotoAC = (payload) => {
  return {
    type: EDIT_PHOTO,
    payload,
  };
};

