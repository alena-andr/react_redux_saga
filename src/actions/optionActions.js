export function setActiveCompanyId(id) {
  return {
    type: 'SET_ACTIVE_COMPANY_ID',
    id,
  };
}

export function setErrorText(errorType, errorText) {
  return {
    type: 'SET_ERROR_TEXT',
    errorText,
    errorType,
  };
}