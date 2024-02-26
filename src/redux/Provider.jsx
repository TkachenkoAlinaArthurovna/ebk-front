'use client';

import { Provider } from 'react-redux';
import { AuthProvider } from '@/redux/contexts/AuthContext';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>{children}</AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
