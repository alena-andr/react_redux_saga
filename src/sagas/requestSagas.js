import { put, call } from 'redux-saga/effects';

import request from '../utils/request';
import { createCompaniesList, createStationsList } from '../utils/options';
import { addData } from '../actions/requestActions';
import { setSelectedCompanyIdAndName } from '../actions/companiesActions';
import { setErrorText, handlingStatusLoading } from '../actions/optionActions';

const urls = {
  companies: '/networks?fields=id,company,location',
  stations: '/networks/',
};

export function* requestStationsSaga(name, id) {
  const url = `${urls[name]}${id}`;
  try {
    yield put(handlingStatusLoading(name, true));
    const response = yield call(request, url);
    const stations = createStationsList(response.data.network.stations);

    yield put(handlingStatusLoading(name, false));
    yield put(addData(name, stations));
  } catch(e) {
    yield put(handlingStatusLoading(name, false));
    yield put(setErrorText('stationsRequestError', 'Oooops... Failed to load stations.'));
  }
}

export function* requestCompanySaga(name) {
  try {
    yield put(handlingStatusLoading(name, true));

    const response = yield call(request, urls[name]);
    const companies = createCompaniesList(response.data.networks);
    const defaultIdCompany = companies[0].id;
    const defaultFullNameCompany = `${companies[0].name}, ${companies[0].country}, ${companies[0].city}`;

    yield put(handlingStatusLoading(name, false));
    yield put(addData(name, companies));
    yield put(setSelectedCompanyIdAndName(defaultIdCompany, defaultFullNameCompany));
    yield requestStationsSaga('stations', defaultIdCompany);
  } catch (e) {
    yield put(handlingStatusLoading(name, false));
    yield put(setErrorText('companiesRequestError', 'Oooops... Failed to load companies.'));
  }
}

export function* requestDataSaga(action) {
  switch (action.name) {
    case 'companies':
      yield requestCompanySaga(action.name);
      break;
    case 'stations':
      yield requestStationsSaga(action.name, action.id);
      break;
    default:
      break;
  }
}