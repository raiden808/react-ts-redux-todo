import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

const sagasMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

const middleware: any[] = [sagasMiddleware];

if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line no-underscore-dangle */
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(
    rootReducer, 
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

// export store singleton instance
export default store;
