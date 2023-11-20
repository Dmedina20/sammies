import { ALERT_SUCCESS, ALERT_ERROR } from "../constants/AlertConstants";

const initialState = {
  type: null,
  message: "",
};

const AlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return { type: "success", message: action.payload };
    case ALERT_ERROR:
      return { type: "error", message: action.payload };
    default:
      return state;
  }
};

export default AlertReducer;
