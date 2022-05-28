import { addAdminAC } from "../actionCreators/adminAC";

export const addProductFetch = (payload) => {
  return (dispatch) => {
    fetch("/createProduct", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addAdminAC(data)));
  };
};
