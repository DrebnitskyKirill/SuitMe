import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";
import { adminReducer } from "./adminReducer";
import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  products: productsReducer,
  cart: cartReducer,
});
