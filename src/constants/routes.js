// routes.js
// Exports the route constants to the rest of the app so I won't mistype or misremember

// Non-Authed
export const login = '/';
export const accessRequest = '/request-access';
// Authed
export const listings = '/listings';
export const makeOffer = '/listings/:id';
export const myListings = '/my-listings';
export const myOffers = '/my-offers';
export const createListing = '/create-listing';
export const account = '/account';
export const logout = '/logout';
export const support = '/support';
