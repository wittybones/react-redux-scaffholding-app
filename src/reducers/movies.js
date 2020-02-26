import { REQUEST_MOVIES_DATA, RECEIVE_MOVIES_DATA, receiveMoviesData } from "../actions/movies"
import { loop, Cmd } from "redux-loop";

export const requestMoviesData = async () => {
  const movies = await fetch("https://thoughtworksreactreduxmovies.firebaseio.com/movies.json")
  const some = await movies.json()
  return some
}

const movieReducer = function (state = { movies: [] }, action) {
  switch (action.type) {
    case REQUEST_MOVIES_DATA: {
      const res = loop(state,
        Cmd.run(requestMoviesData, {
          args: [],
          successActionCreator: receiveMoviesData,
          failActionCreator: console.log
        }));
      console.log(res)
      return res
    }
    case RECEIVE_MOVIES_DATA:
      return {
        ...state,
        movies: action.payload.data
      }
    default: return state
  }
}

export default movieReducer;