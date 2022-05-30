import { userReducer } from './userReducer';
import {combineReducers} from 'redux';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});
