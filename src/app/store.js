import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { listCartItemsReducer } from "./reducers/cartReducer";
import { productListReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  cartItemsList: listCartItemsReducer,
  productsList: productListReducer,
});
const initialState = {};
const middleware = [thunk];

const store = configureStore(
  { reducer: reducers },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
