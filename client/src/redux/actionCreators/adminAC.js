import { ADD_PRODUCT } from "../actionType/adminAT";

export const addAdminAC = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};
