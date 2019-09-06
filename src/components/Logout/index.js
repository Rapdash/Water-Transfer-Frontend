import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../data/AuthContext';
import { login } from '../../constants/routes';

export const LogoutPage = () => {
  const auth = useContext(AuthContext);
  auth.setAuthState(null);
  localStorage.removeItem('token');
  return <Redirect to={login} />;
};
