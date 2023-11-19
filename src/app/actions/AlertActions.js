import { ALERT_SUCCESS, ALERT_ERROR } from "../constants/AlertConstants";

export const showSuccessAlert = (message) => ({
  type: ALERT_SUCCESS,
  payload: message,
});

export const showErrorAlert = (message) => ({
  type: ALERT_ERROR,
  payload: message,
});
