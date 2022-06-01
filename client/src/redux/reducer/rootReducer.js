import { userReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";
import { adminReducer } from "./adminReducer";
import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  products: productsReducer,
  order: orderReducer,
  cart: cartReducer,
});
