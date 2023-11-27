import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/AuthConstants";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, user: null, error: action.payload };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};