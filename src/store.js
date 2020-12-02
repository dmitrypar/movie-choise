import {createStore, compose, applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import {RootReducer} from './redux/root-reducer'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas/root-watcher'

const saga = createSagaMiddleWare()

export const store = createStore(RootReducer, compose(
    applyMiddleware(
        saga
    ),  composeWithDevTools()
));

saga.run(rootSaga)