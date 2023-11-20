import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { listCartItemsReducer } from "./reducers/CartReducer";
import { productListReducer } from "./reducers/ProductReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import AlertReducer from "./reducers/AlertReducer";

const reducers = combineReducers({
  cartItemsList: listCartItemsReducer,
  productsList: productListReducer,
  alert: AlertReducer,
});
const initialState = {};
const middleware = [thunk];

const store = configureStore(
  { reducer: reducers },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
