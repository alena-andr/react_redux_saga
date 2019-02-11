export function setErrorText(errorType, errorText) {
  return {
    type: 'SET_ERROR_TEXT',
    errorText,
    errorType,
  };
}
