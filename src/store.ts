import { combineReducers, applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { scoreReducer } from './reducers/scoreReducer'
import { wordReducer } from './reducers/wordReducer'

const reducers = combineReducers({ scoreReducer, wordReducer })

export const store = createStore(reducers, applyMiddleware(logger))