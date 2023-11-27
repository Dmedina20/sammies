import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/AuthConstants";
import { auth } from "../../firebase/config";

// Example action for user login
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // Perform Firebase authentication here
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    // If authentication is successful, dispatch USER_LOGIN_SUCCESS with the user information
    const user = userCredential.user;
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
  } catch (error) {
    // If authentication fails, dispatch USER_LOGIN_FAIL
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};

// Example action for user logout
export const logoutUser = () => async (dispatch) => {
  try {
    // Perform Firebase logout here
    await auth.signOut();

    // Dispatch USER_LOGOUT
    dispatch({ type: USER_LOGOUT });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
