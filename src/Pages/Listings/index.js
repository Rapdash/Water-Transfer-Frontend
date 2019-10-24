import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow } from '@ionic/react';
import Axios from 'axios';

import { ListingCard } from '../../components/shared/ListingCard';
import { Page } from '../../components/shared/Page';
import { NoDataCard } from '../../components/shared/NoDataCard';

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
    <Page title='For Sale Listings'>
      <IonGrid>
        <IonRow>
          {listings &&
            listings[0] &&
            listings.map(listing => (
              <ListingCard listing={listing} key={listing._id} />
            ))}
          {!listings ||
            (!listings[0] && (
              <NoDataCard
                cardInfo='There are no listings from other users.'
                cardTitle='No Listings'
              />
            ))}
        </IonRow>
      </IonGrid>
    </Page>
  );
};
