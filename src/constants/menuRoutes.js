import { logIn, mailOpen, water, cash, list, contacts, add, person, arrowRoundBack, medkit } from "ionicons/icons"

export const menuRoutes = {
    loggedOutPages: [
        { title: 'Log In', path: '/', icon: logIn },
        { title: 'Request Access', path: '/access-request', icon: mailOpen }
    ],
    loggedInPages: [
        { title: 'For Sale', path: '/listings', icon: water },
        { title: 'Water Wanted (COMING SOON)', path: '/water-wanted', icon: cash },
        { title: 'My Listings', path: '/my-listings', icon: list },
        { title: 'My Offers', path: '/my-offers', icon: contacts },
        { title: 'Create New Listing', path: '/create-listing', icon: add },
        { title: 'Account Management', path: '/account', icon: person },
        { title: 'Sign Out', path: '/signout', icon: arrowRoundBack },
        { title: 'App Support', path: '/support', icon: medkit }
    ]
};