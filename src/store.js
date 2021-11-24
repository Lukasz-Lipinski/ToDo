import { combineReducers, createStore } from 'redux';

import listReducer from './components/MainView/redux';

export const rootReducers = combineReducers({
  list: listReducer
})

const Store = createStore(rootReducers);

export default Store;