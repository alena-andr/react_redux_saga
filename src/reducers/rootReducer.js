import { combineReducers } from 'redux';

import requestReducers from './requestReducers';
import optionReducers from './optionReducers';
import stationsReducers from './stationsReducers';
import companiesReducers from './companiesReducers';

const rootReducer = combineReducers({
  requests: requestReducers,
  options: optionReducers,
  stations: stationsReducers,
  companies: companiesReducers,
});

export default rootReducer;