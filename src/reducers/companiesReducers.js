import { SET_SELECTED_COMPANY_ID_AND_NAME } from '../constants/constants';

const initialState = {
  selectedCompanyId: null,
  selectedCompanyName: null,
};

function companiesReducers(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_COMPANY_ID_AND_NAME:
      return { ...state, selectedCompanyId: action.id, selectedCompanyName: action.name };
    default:
      return state;
  }
}

export default companiesReducers;