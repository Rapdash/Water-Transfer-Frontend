// Exists to direct the user to the correct listing view depending on
// whether they own it or not.

import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import AuthContext from '../../data/AuthContext';
import { login } from '../../constants/routes';

const BaseAuthedListingRoute = ({
  component: Component,
  location,
  ...rest
}) => {
  const auth = useContext(AuthContext);
  console.log(location);
  return (
    <Route
      {...rest}
      render={props =>
        auth.user ? <Component {...props} /> : <Redirect to={login} />
      }
    />
  );
};

export const AuthedListingRoute = withRouter(BaseAuthedListingRoute);
