export function setSelectedCompanyIdAndName(id, name) {
  return {
    type: 'SET_SELECTED_COMPANY_ID_AND_NAME',
    id,
    name,
  };
}