import { combineReducers } from 'redux-loop'
import { connectRouter } from 'connected-react-router'

import sampleReducer from './sample.js'
import movieReducer from './movies.js'

const rootReducer = history => combineReducers({
	router: connectRouter(history),
	sample: sampleReducer,
	movies: movieReducer
});

export default rootReducer
