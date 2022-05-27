import { addAdminAC } from "../actionCreators/adminAC";

export const addProductFetch = (data) => {
  return (dispatch) => {
    fetch("/createProduct", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => dispatch(addAdminAC(res)));
  };
};
