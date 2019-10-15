import React, { useState, useEffect } from 'react';
import { IonSpinner } from '@ionic/react';

import { authCheck } from '../../data/authCheck';
import { AuthProvider } from '../../data/AuthContext';

import { Layout } from '../Layout';

export const App = () => {
  const [authState, setAuthState] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    authCheck({ setAuthState, setIsLoaded });
  }, []);
  return (
    <AuthProvider value={{ user: authState, setAuthState }}>
      {isLoaded ? <Layout /> : <IonSpinner />}
    </AuthProvider>
  );
};
