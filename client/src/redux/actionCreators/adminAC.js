import actionTypesAdmin from "../actionType/adminAT";

export const addAdminAC = (payload) => {
  return {
    type: actionTypesAdmin.ADD,
    payload,
  };
};
