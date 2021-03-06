import { TOGGLE_LIKED_STATION, UPDATE_ARRAY_WITH_LIKED_STATIONS } from '../constants/constants';

export function toggleLikedStation(name) {
  return {
    type: TOGGLE_LIKED_STATION,
    name,
  };
}

export function updateArrayWithLikedStations(arrayStations) {
  return {
    type: UPDATE_ARRAY_WITH_LIKED_STATIONS,
    arrayStations,
  };
}