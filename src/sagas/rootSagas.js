import { takeEvery } from 'redux-saga/effects';

import { requestDataSaga } from './requestSagas';

export default function* rootSaga() {
    yield takeEvery('GET_DATA', requestDataSaga);
};