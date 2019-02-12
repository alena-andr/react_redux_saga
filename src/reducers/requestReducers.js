import { ADD_DATA } from '../constants/constants';

const initialState = {
  companies: [],
  stations: [],
};

function requestReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, [action.name]: action.data };
    default:
      return state;
  }
}

export default requestReducers;