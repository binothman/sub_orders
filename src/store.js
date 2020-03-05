/*
  Redux Store

  this initialize file for application state using redux
  - use this file to add/edit entities the STATE
*/

import { createStore, combineReducers } from 'redux';

// redux-form reducer
import { reducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reducer,
});

const store = createStore(rootReducer);

export default store;
