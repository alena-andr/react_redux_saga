export function getData(name, id) {
  return {
    type: 'GET_DATA',
    name,
    id,
  }
}

export function addData(name, data) {
  return {
    type: 'ADD_DATA',
    name,
    data,
  }
}