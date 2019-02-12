import { takeEvery, all } from 'redux-saga/effects';

import { requestDataSaga } from './requestSagas';
import { toggleLikedStationSaga } from './stationsSaga';
import { GET_DATA, TOGGLE_LIKED_STATION } from '../constants/constants';

export default function* rootSaga() {
  yield  all([
    yield takeEvery(GET_DATA, requestDataSaga),
    yield takeEvery(TOGGLE_LIKED_STATION, toggleLikedStationSaga),
  ]);
};