// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from 'react';
import { Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { NonAuthedRoute } from './NonAuthedRoute';

import {
  LoginPage,
  LogoutPage,
  ListingsPage,
  MakeOfferPage,
  CreateListingPage
} from '../../../Pages';

import {
  logout,
  login,
  listings,
  makeOffer,
  createListing
} from '../../../constants/routes';

export const Routes = () => (
  <>
    <Switch>
      {/* Authed */}
      <PrivateRoute path={logout} component={LogoutPage} />
      <PrivateRoute path={makeOffer} component={MakeOfferPage} />
      <PrivateRoute path={listings} component={ListingsPage} />
      <PrivateRoute path={createListing} component={CreateListingPage} />
      {/* Non-Authed */}
      <NonAuthedRoute path={login} exact component={LoginPage} />
    </Switch>
  </>
);
