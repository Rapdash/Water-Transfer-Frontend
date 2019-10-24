// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthedRoute } from './AuthedRoute';
import { NonAuthedRoute } from './NonAuthedRoute';
import { AuthedListingRoute } from './AuthedListingRoute';

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
  listingDetail,
  createListing,
  myListings,
  incomingOffers
} from '../../constants/routes';

export const Routes = () => (
  <>
    <Switch>
      {/* Authed */}
      <AuthedRoute path={logout} component={LogoutPage} />
      <AuthedRoute path={listingDetail} component={MakeOfferPage} />
      <AuthedRoute path={incomingOffers} component={IncomingOffersPage} />
      <AuthedRoute path={listings} component={ListingsPage} />
      <AuthedRoute path={createListing} component={CreateListingPage} />
      <AuthedRoute path={myListings} component={MyListingsPage} />
      <AuthedListingRoute path={listingDetail} />
      {/* Non-Authed */}
      <NonAuthedRoute path={login} exact component={LoginPage} />
    </Switch>
  </>
);
