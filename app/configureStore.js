import { compose, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

export default function(reducer, initialState) {
    const enhancer = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );

    return createStore(reducer, initialState, enhancer);
}
