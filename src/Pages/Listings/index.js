import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow } from '@ionic/react';
import Axios from 'axios';

import { ListingCard } from './ListingCard';
import { Page } from '../../components/shared/Page';

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
  return (
    <Page title="Listings">
      <IonGrid>
        <IonRow>
          {listings.map(listing => (
            <ListingCard listing={listing} key={listing._id} />
          ))}
        </IonRow>
      </IonGrid>
    </Page>
  );
};
