const initialState = {
  activeCompanyId: null,
  loading: false,
};

function optionReducers(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_COMPANY_ID':
      return { ...state, activeCompanyId: action.id };
    case 'SET_ERROR_TEXT':
      return { ...state, [action.errorType]: action.errorText };
    case 'CHANGE_LOADER_STATUS':
      return { ...state };
    default:
      return state;
  }
}

export default optionReducers;