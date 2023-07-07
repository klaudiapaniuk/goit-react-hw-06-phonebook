import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlice';
import filterReducer from '../redux/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
