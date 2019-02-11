import { put, call } from 'redux-saga/effects';

import request from '../utils/request';
import { createCompaniesList, createStationsList } from '../utils/options';
import { addData } from '../actions/requestActions';
import { setSelectedCompanyIdAndName } from '../actions/companiesActions';
import { setErrorText } from '../actions/optionActions';

const urls = {
  companies: '/networks?fields=id,company,location',
  stations: '/networks/',
};

export function* requestStationsSaga(name, id) {
  let url = `${ urls[name] }${ id }`;
  try {
    const response = yield call(request, url);
    const stations = createStationsList(response.data.network.stations);

    yield put(addData(name, stations));
  } catch(e) {
    yield put(setErrorText('stationsRequestError', 'Oooops... Failed to load stations.'));
  }
}

export function* requestCompanySaga(name) {
  try {
    const response = yield call(request, urls[name]);
    const companies = createCompaniesList(response.data.networks);
    const defaultIdCompany = companies[0].id;
    const defaultNameCompany = companies[0].name;

    yield put(addData(name, companies));
    yield put(setSelectedCompanyIdAndName(defaultIdCompany, defaultNameCompany));
    yield requestStationsSaga('stations', defaultIdCompany);
  } catch (e) {
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