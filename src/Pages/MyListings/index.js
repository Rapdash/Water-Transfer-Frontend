// ON HOLD
import React, { useEffect, useState } from 'react';

import { IonGrid, IonRow } from '@ionic/react';
import Axios from 'axios';

import { Page } from '../../components/shared/Page';
import { NoListingCard } from '../../components/shared/NoListingCard';

export const MyListingsPage = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const getListings = async () => {
      const response = await Axios.get(
        'http://localhost:9001/listing?mine=true',
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      );
      setListings(response.data);
    };
    getListings();
  }, []);
  console.log(listings);
  return (
    <Page title="My Listings">
      <IonGrid>
        <IonRow>
          {!listings || (!listings[0] && <NoListingCard myListings />)}
        </IonRow>
      </IonGrid>
    </Page>
  );
};
