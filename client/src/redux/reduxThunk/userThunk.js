import { addUserAC, logoutUserAC, logUserAC } from "../actionCreators/userAC";

export const addUserFetch = (payload) => {

  return ((dispatch) => {
    fetch('/registration', {
      method: 'POST',
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => dispatch(addUserAC(data)))
  })
};

export const logUserFetch = (data) => {

  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => dispatch(logUserAC(res)))
  }

};

export const logoutFetch = () => {
  return (dispatch) => {
    fetch('/logout',{
      method:'POST',
      headers: { "Content-Type": "Application/json" },
    })
      .then(res => res.json())
      .then(data => dispatch(logoutUserAC(data)))
  }
};

