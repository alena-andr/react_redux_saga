import { put, select } from 'redux-saga/effects';

import { updateArrayWithLikedStations } from '../actions/stationsActions';

export function* toggleLikedStationSaga(action) {
  const arrayLikedStations = select((state) => state.likedStations.includes(action.name));
  const checkStationInArray = arrayLikedStations.includes(action.name);
  if (!checkStationInArray) {
    arrayLikedStations.push(action.name);
    console.log('stations', arrayLikedStations);
    yield put(updateArrayWithLikedStations(arrayLikedStations));
  } else {
    arrayLikedStations.forEach((station, index) => {
      if (station === action.name) {
        arrayLikedStations.splice(index, 1);
      }
    });
    yield put(updateArrayWithLikedStations(arrayLikedStations));
  }
}