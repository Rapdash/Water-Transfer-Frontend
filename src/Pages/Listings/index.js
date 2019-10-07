import React, { useState, useEffect } from 'react';
import { IonGrid, IonCard, IonRow, IonCardContent } from '@ionic/react';
import Axios from 'axios';

import { ListingCard } from './ListingCard';

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
    <IonCard>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            {listings.map(listing => (
              <ListingCard listing={listing} key={listing._id} />
            ))}
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
