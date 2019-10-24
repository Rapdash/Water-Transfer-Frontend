// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthedRoute } from './AuthedRoute';
import { NonAuthedRoute } from './NonAuthedRoute';

import {
  LoginPage,
  LogoutPage,
  ListingsPage,
  MakeOfferPage,
  CreateListingPage,
  MyListingsPage,
  IncomingOffersPage
} from '../../Pages';

import {
  logout,
  login,
  listings,
  makeOffer,
  createListing,
  myListings,
  incomingOffers
} from '../../constants/routes';

export const Routes = () => (
  <>
    <Switch>
      {/* Authed */}
      <AuthedRoute path={logout} component={LogoutPage} />
      <AuthedRoute path={makeOffer} component={MakeOfferPage} />
      <AuthedRoute path={incomingOffers} component={IncomingOffersPage} />
      <AuthedRoute path={listings} component={ListingsPage} />
      <AuthedRoute path={createListing} component={CreateListingPage} />
      <AuthedRoute path={myListings} component={MyListingsPage} />
      {/* Non-Authed */}
      <NonAuthedRoute path={login} exact component={LoginPage} />
    </Switch>
  </>
);
