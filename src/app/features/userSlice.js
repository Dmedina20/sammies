import { createSlice } from "@reduxjs/toolkit";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const initialState = {
  user: null,
  userData: {},
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserDataRequest: (state) => {
      state.loading = true;
    },
    updateUserDataSuccess: (state, action) => {
      state.loading = false;
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
      state.error = null;
    },
    updateUserDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  login,
  logout,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserDataRequest,
  updateUserDataSuccess,
  updateUserDataFailure,
} = userSlice.actions;

export const fetchUserData = (uid) => async (dispatch) => {
  dispatch(fetchUserRequest());

  const db = getFirestore();
  const userDocRef = doc(db, "users", uid);

  try {
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      dispatch(fetchUserSuccess(userData));
    } else {
      dispatch(fetchUserSuccess({}));
    }
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
