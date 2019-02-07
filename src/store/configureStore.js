import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas/rootSagas';
import rootReducer from '../reducers/rootReducer';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}