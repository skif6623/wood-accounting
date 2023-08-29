import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { boardSliceReducer } from './boardSlice';
import { roundWoodReducer } from './roundWoodSlice';
import { authReducer } from './auth/authSlice';

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
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
