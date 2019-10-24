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
  ListingDetailPage,
  CreateListingPage,
  IncomingOffersPage
} from '../../Pages';

import {
  logout,
  login,
  listings,
  listingDetail,
  createListing,
  incomingOffers
} from '../../constants/routes';

export const Routes = () => (
  <Switch>
    {/* Authed */}
    <AuthedRoute path={logout} exact component={LogoutPage} />
    <AuthedRoute path={incomingOffers} exact component={IncomingOffersPage} />
    <AuthedRoute path={listings} exact component={ListingsPage} />
    <AuthedRoute path={createListing} exact component={CreateListingPage} />
    <AuthedRoute path={listingDetail} exact component={ListingDetailPage} />
    {/* Non-Authed */}
    <NonAuthedRoute path={login} exact component={LoginPage} />
  </Switch>
);
