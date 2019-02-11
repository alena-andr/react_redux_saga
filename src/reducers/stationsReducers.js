const initialState = {
  likedStations: [],
};

function stationsReducers(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_ARRAY_WITH_LIKED_STATIONS':
      return { ...state, likedStations: state.likedStations };
    default:
      return state;
  }
}

export default stationsReducers;