import { configureStore } from '@reduxjs/toolkit';
import {tableReducer} from '../features/TablesReducer';

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});


