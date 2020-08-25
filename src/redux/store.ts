import { createStore, applyMiddleware } from 'redux'
//Import redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension'
//Import Redux Thunks
import thunk from 'redux-thunk'
//Redux Logger
import logger from 'redux-logger'

import rootReducer from './reducer'

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
)

// store.dispatch(fetchBooks())
// console.log(store.getState().countries)

// export default store
