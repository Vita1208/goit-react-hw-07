import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});

export { store };


