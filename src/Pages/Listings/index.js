import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow } from '@ionic/react';
import Axios from 'axios';

import { ListingCard } from '../../components/shared/ListingCard';
import { Page } from '../../components/shared/Page';
import { NoListingCard } from '../../components/shared/NoListingCard';

export const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const getListings = async () => {
      const response = await Axios.get('http://localhost:9001/listing', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      setListings(response.data);
    };
    getListings();
  }, []);
  console.log(listings);
  return (
    <Page title="For Sale Listings">
      <IonGrid>
        <IonRow>
          {listings &&
            listings[0] &&
            listings.map(listing => (
              <ListingCard listing={listing} key={listing._id} />
            ))}
          {!listings || (!listings[0] && <NoListingCard />)}
        </IonRow>
      </IonGrid>
    </Page>
  );
};
