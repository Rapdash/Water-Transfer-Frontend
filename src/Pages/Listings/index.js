import React, { useState, useEffect } from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonTitle,
  IonCardContent,
  IonText,
  IonItemDivider,
  IonButton
} from '@ionic/react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { listings as listingsRoute } from '../../constants/routes';
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
    <IonGrid>
      <IonRow>
        {listings.map(listing => {
          console.log(listing);
          return <ListingCard listing={listing} key={listing._id} />;
        })}
      </IonRow>
    </IonGrid>
  );
};
