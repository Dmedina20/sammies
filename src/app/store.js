import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { listCartItemsReducer } from "./reducers/CartReducer";
import { productListReducer } from "./reducers/ProductReducer";
import AlertReducer from "./reducers/AlertReducer";
import { userSlice } from "./features/userSlice";

const reducers = combineReducers({
  cartItemsList: listCartItemsReducer,
  productsList: productListReducer,
  alert: AlertReducer,
  user: userSlice.reducer,
});

const initialState = {};

const store = configureStore({
  reducer: reducers,
  initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: false,
    }),
});

export default store;
