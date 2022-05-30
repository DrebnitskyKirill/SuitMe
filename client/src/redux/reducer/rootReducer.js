
import { userReducer } from "./userReducer";
import { productsReducer } from './productsReducer';
import { adminReducer } from "./adminReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  products: productsReducer,
});
