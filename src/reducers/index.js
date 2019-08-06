import {combineReducers} from 'redux-loop'
import { connectRouter } from 'connected-react-router'

import sampleReducer from './sample.js'

const rootReducer = history => combineReducers({
	router: connectRouter(history),
	sample: sampleReducer,
});

export default rootReducer
