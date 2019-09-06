import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../../data/AuthContext';
import { login } from '../../../constants/routes';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        auth.user ? <Component {...props} /> : <Redirect to={login} />
      }
    />
  );
};
