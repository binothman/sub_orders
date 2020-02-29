import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { createLogger } from 'redux-logger';

const logger = [];

if (process.env.NODE_ENV === 'development') {
  logger.push(createLogger());
}

const middleware = applyMiddleware(
  ...logger,
);

const rootReducer = combineReducers({
  form: reducer,
});

const store = createStore(rootReducer, middleware);

export default store;
