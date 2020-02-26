import { receiveMoviesData, requestMoviesData } from "../../actions/movies";

describe('[Actions]', function () {
  it('should call receiveMoviesData function', function () {
    const action = receiveMoviesData("someData")
    expect(action).toEqual({
      type: "RECEIVE_MOVIES_DATA",
      payload: { data: "someData" }
    }
    )
  });
  it('should call requestMoviesData function', function () {
    const action = requestMoviesData("someData")
    expect(action).toEqual({
      type: "REQUEST_MOVIES_DATA",
      payload: {}
    }
    )
  });
});