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
import createWebStorage from 'redux-persist/es/storage/createWebStorage';
import MenuModalSlice from '@/redux/slices/MenuModalSlice';
import CartModalSlice from '@/redux/slices/CartModalSlice';
import ProductFilterSlice from '@/redux/slices/ProductFilterSlice';
import FavoritesSlice from '@/redux/slices/FavoritesSlice';
import CartSlice from '@/redux/slices/CartSlice';
import CatalogLinksSlice from '@/redux/slices/CatalogLinksSlice';
import CategoryProductsSlice from '@/redux/slices/CategoryProductsSlice';
import DeliverySlice from '@/redux/slices/DeliverySlice';
import PaymentSlice from '@/redux/slices/PaymentSlice';
import SearchProductSlice from '@/redux/slices/SearchProductSlice';

export function createPersistStore() {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
}
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createPersistStore();
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  menuModal: MenuModalSlice,
  cartModal: CartModalSlice,
  productFilter: ProductFilterSlice,
  favorites: FavoritesSlice,
  cart: CartSlice,
  catalogLinks: CatalogLinksSlice,
  categoryProducts: CategoryProductsSlice,
  delivery: DeliverySlice,
  payment: PaymentSlice,
  search: SearchProductSlice,
});

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
