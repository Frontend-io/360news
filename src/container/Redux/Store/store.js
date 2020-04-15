import { createStore, combineReducers, applyMiddleware } from "redux"
import { NewsReducer } from '../Reducers/newsReducer';
import thunk from "redux-thunk";
import Logger from 'redux-logger'

const rootReducer = combineReducers({
    news: NewsReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunk, Logger ))