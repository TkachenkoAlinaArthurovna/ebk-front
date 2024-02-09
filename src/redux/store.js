import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MenuModalSlice from '@/redux/slices/MenuModalSlice';
import CartModalSlice from '@/redux/slices/CartModalSlice';
import ProductFilterSlice from '@/redux/slices/ProductFilterSlice';
import MinMaxFilterPriceSlice from '@/redux/slices/MinMaxFilterPriceSlice';

const rootReducer = combineReducers({
  menuModal: MenuModalSlice,
  cartModal: CartModalSlice,
  productFilter: ProductFilterSlice,
  minMaxFilterPrice: MinMaxFilterPriceSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
