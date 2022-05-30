import { ADD_USER } from '../actionType/userAT';

const initialState = { user: { } }

export const userReducer = (state = initialState, action) => {
switch (action.type) {
  case ADD_USER:
    return {...state, user: { id: action.payload.id, email: action.payload.email } };

  default:
    return state
  }
}
