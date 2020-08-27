import { createStore, applyMiddleware } from 'redux'
//Import redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension'
//Import Redux Thunks
import thunk, { ThunkMiddleware } from 'redux-thunk'
//Redux Logger
import logger from 'redux-logger'

import rootReducer from './reducer'
import { AppActions } from './types/actionTypes'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2,
}

export type AppState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
	persistedReducer,
	composeWithDevTools(
		applyMiddleware(logger, thunk as ThunkMiddleware<AppState, AppActions>)
	)
)

export const persiststore = persistStore(store)
