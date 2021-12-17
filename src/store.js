import { combineReducers, createStore } from 'redux';

import listReducer from './components/MainView/redux';
import flagsReducer from './components/Snackbar/redux';

export const rootReducers = combineReducers({
  list: listReducer,
  flags: flagsReducer
})

const Store = createStore(rootReducers);

export default Store;