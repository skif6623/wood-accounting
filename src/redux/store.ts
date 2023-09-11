import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { boardSliceReducer } from './boardSlice';
import { roundWoodReducer } from './roundWoodSlice';
import { productionSliceReducer } from './productionSlice';
import { authReducer } from './auth/authSlice';
import { InProgressWoodReducer } from './InProgressWoodSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    board: boardSliceReducer,
    roundWood: roundWoodReducer,
    production: productionSliceReducer,
    inProgressWood: InProgressWoodReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
