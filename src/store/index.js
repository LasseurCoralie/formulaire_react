import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from '../middlewares/loggerMiddleware';
import authMiddleware from '../middlewares/authMiddleware';

import reducer from '../reducers/login';

const enhancers = composeWithDevTools(
    applyMiddleware(
        loggerMiddleware,
        authMiddleware,
    ),
);

const store = createStore(
    reducer,
    enhancers,
);

export default store;
