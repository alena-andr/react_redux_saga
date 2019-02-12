import { put, select } from 'redux-saga/effects';

import { updateArrayWithLikedStations } from '../actions/stationsActions';

export function* toggleLikedStationSaga(action) {
  const arrayLikedStations = yield select((state) => state.stations.likedStations);
  const checkStationInArray = arrayLikedStations.includes(action.name);

  if (!checkStationInArray) {
    const newArrayStations = [ ...arrayLikedStations ];
    newArrayStations.push(action.name);

    yield put(updateArrayWithLikedStations(newArrayStations));
  } else {
    const newArrayStations = [ ...arrayLikedStations ];

    newArrayStations.forEach((station, index) => {
      if (station === action.name) {
        newArrayStations.splice(index, 1);
      }
    });

    yield put(updateArrayWithLikedStations(newArrayStations));
  }
}