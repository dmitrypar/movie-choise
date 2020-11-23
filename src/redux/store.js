import {createStore, compose, applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import {RootReducer} from './reducer'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'

const saga = createSagaMiddleWare()

export const store = createStore(RootReducer, compose(
    applyMiddleware(
        saga
    ),  composeWithDevTools()
));

saga.run(rootSaga)