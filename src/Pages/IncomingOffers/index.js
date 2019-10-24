import React, { useEffect, useState } from 'react';
import { IonRow, IonGrid } from '@ionic/react';
import Axios from 'axios';

import { Page, NoDataCard } from '../../components/shared';
import { ListingWithOffersCard } from './ListingWithOffersCard';

export const IncomingOffersPage = () => {
  const [listings, setListings] = useState(null);
  const [offers, setOffers] = useState(null);

  useEffect(() => {
    const getOffers = async () => {
      const listingResponse = await Axios.get(
        'http://localhost:9001/listing?mine=true',
        {
          headers: { Authorization: localStorage.getItem('token') }
        }
      );
      setListings(listingResponse.data);
      const offerResponse = await Axios.get(
        'http://localhost:9001/offer/incoming',
        {
          headers: { Authorization: localStorage.getItem('token') }
        }
      );
      setOffers(offerResponse.data);
    };
    getOffers();
  }, []);

  const renderListingWithOffersCards = () =>
    listings.map(listing => (
      <ListingWithOffersCard
        key={listing._id}
        listing={listing}
        offers={offers}
      />
    ));

  return (
    <Page title='Incoming Offers'>
      {!offers && (
        <NoDataCard
          cardInfo='Nobody has made offers on your listings yet.'
          cardTitle='No Offers'
        />
      )}
      <IonGrid>
        <IonRow>{offers && listings && renderListingWithOffersCards()}</IonRow>
      </IonGrid>
    </Page>
  );
};
