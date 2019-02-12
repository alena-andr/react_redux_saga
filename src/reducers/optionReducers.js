import { CHANGE_LOADER_STATUS, SET_ERROR_TEXT } from '../constants/constants';

const initialState = {
  loading: {},
  errors: {},
};

function optionReducers(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADER_STATUS:
      return { ...state, loading: { [action.name]: action.status } };
    case SET_ERROR_TEXT:
      return { ...state, errors: { [action.errorType]: action.errorText } };
    default:
      return state;
  }
}

export default optionReducers;