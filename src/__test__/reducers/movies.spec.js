import movieReducer, { requestMoviesData } from "../../reducers/movies"
import { loop, Cmd } from "redux-loop"
import { receiveMoviesData } from "../../actions/movies";

describe('movieReducer Tests', function () {
  it('should call movieReducer function and get default state', function () {
    const state = undefined
    const action = { type: "wrong", payload: {} }
    const actualOutput = movieReducer(state, action)
    const expectedOutput = { movies: [] }
    expect(actualOutput).toEqual(expectedOutput)
  });

  it('should call movieReducer function and set the data got in payload', function () {
    const state = undefined
    const action = { type: "RECEIVE_MOVIES_DATA", payload: { data: "someData" } }
    const actualOutput = movieReducer(state, action)
    const expectedOutput = { movies: "someData" }
    expect(actualOutput).toEqual(expectedOutput)
  });

  it('should call movieReduder function on dispatch of the REQUEST_MOVIES_DATA action', function () {
    const action = { type: "REQUEST_MOVIES_DATA", payload: {} }
    const state = { movies: [] };
    const newState = movieReducer(state, action)
    const expectedState = loop(
      state,
      Cmd.run(requestMoviesData, {
        args: [],
        successActionCreator: receiveMoviesData,
        failActionCreator: console.log
      })
    )
    expect(newState).toEqual(expectedState)
  })
});