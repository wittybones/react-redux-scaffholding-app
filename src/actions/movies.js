export const LOAD_MOVIES = "LOAD_MOVIES";
export const RECEIVE_MOVIES_DATA = "RECEIVE_MOVIES_DATA";
export const REQUEST_MOVIES_DATA = "REQUEST_MOVIES_DATA";

export function receiveMoviesData(data) {
  return {
    type: RECEIVE_MOVIES_DATA,
    payload: { data }
  }
}

export function requestMoviesData() {
  return {
    type: REQUEST_MOVIES_DATA,
    payload: {}
  }
}