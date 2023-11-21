import {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_ITEM_ADD_FAIL,
} from "../constants/CartConstants";
const initialState = {
  loading: false,
  cartItems: [],
};

export const listCartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CART_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case CART_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CART_ITEM_ADD_REQUEST:
      const newItem = action.payload;
      if (!newItem) {
        return state; // Ignore if payload is undefined
      }

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        // Item already exists in the cart, update quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id
              ? { ...item, qtyInCart: item.qtyInCart + newItem.qtyInCart }
              : item
          ),
        };
      } else {
        // Item is not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    case CART_ITEM_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        newCartItem: action.payload,
      };
    case CART_ITEM_ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addItemToCartReducer = (state = { newCartItem: {} }, action) => {
  switch (action.type) {
    case CART_ITEM_ADD_REQUEST:
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item already exists, update the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, qtyInCart: item.qtyInCart + 1 }
              : item
          ),
        };
      } else {
        // If item doesn't exist, add a new item
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case CART_ITEM_ADD_SUCCESS:
      return {
        loading: false,
        newCartItem: action.payload,
      };

    case CART_ITEM_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
