import { CHANGE_LOADER_STATUS, SET_ERROR_TEXT  } from '../constants/constants';

export function setErrorText(errorType, errorText) {
  return {
    type: SET_ERROR_TEXT,
    errorText,
    errorType,
  };
}

export function handlingStatusLoading(name, status) {
  return {
    type: CHANGE_LOADER_STATUS,
    name,
    status,
  };
}