import { UPDATE_ARRAY_WITH_LIKED_STATIONS } from '../constants/constants';

const initialState = {
  likedStations: [],
};

function stationsReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ARRAY_WITH_LIKED_STATIONS:
      return { ...state, likedStations: action.arrayStations };
    default:
      return state;
  }
}

export default stationsReducers;