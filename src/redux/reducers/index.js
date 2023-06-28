import { combineReducers } from "redux";
import { productsReducer } from "./products";
import cartReducer from "./cart";
import adminReducer from "./admin";
const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  admin: adminReducer,
});
export default reducers;
