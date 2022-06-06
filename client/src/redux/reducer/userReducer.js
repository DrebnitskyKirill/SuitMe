import { ADD_USER, LOGOUT, LOG_USER } from '../actionType/userAT';

const initialState = { user: { } }

export const userReducer = (state = initialState, action) => {
switch (action.type) {
  case ADD_USER:
    return {...state, user: { id: action.payload.id, email: action.payload.email } };

  case LOG_USER:
    return {...state, user: { id: action.payload.id, email: action.payload.email } };
  
    case LOGOUT:
      return {...state, user: { } };

  default:
    return state
  }
};
