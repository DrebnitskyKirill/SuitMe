import { ADD_USER, LOGOUT, LOG_USER } from '../actionType/userAT';

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload,
  }
};

export const logUserAC = (payload) => {
  return {
    type: LOG_USER,
    payload,
  }
};

export const logoutUserAC = (payload) => {
  return {
    type: LOGOUT,
    payload,
  }
};
