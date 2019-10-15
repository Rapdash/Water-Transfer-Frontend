// menuData.js
// Holds the actual information that the SideMenu component displays

import {
  logIn,
  mailOpen,
  water,
  list,
  contacts,
  add,
  person,
  arrowRoundBack,
  medkit
} from 'ionicons/icons';
import {
  login,
  accessRequest,
  listings,
  myListings,
  myOffers,
  createListing,
  account,
  logout,
  support
} from './routes';

export const menuRoutes = {
  loggedOutPages: [
    { title: 'Log In', path: login, icon: logIn },
    { title: 'Request Access', path: accessRequest, icon: mailOpen }
  ],
  loggedInPages: [
    { title: 'For Sale', path: listings, icon: water },
    { title: 'My Listings', path: myListings, icon: list },
    { title: 'My Offers', path: myOffers, icon: contacts },
    { title: 'Create New Listing', path: createListing, icon: add },
    { title: 'Account Management', path: account, icon: person },
    { title: 'Log Out', path: logout, icon: arrowRoundBack },
    { title: 'App Support', path: support, icon: medkit }
  ]
};
