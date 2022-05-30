import { addUserAC } from "../actionCreators/userAC";

export const addUserFetch = (data) => {

  return (dispatch) => {
  fetch('/registration', {
      method: 'POST',
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => dispatch(addUserAC(res)))
  }

}

