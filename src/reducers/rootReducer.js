import { combineReducers } from 'redux';

import requestReducers from './requestReducers';
import optionReducers from './optionReducers';

const rootReducer = combineReducers({
  requests: requestReducers,
  options: optionReducers,
});

export default rootReducer;