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

  const listingCards = () => {
    return listings.map(
      ({ _id, volume, price, offerPending, twaiConfirmed, waterType }) => (
        <IonCol
          sizeXs={12}
          sizeSm={6}
          sizeMd={6}
          sizeLg={6}
          sizeXl={4}
          key={_id}
        >
          <IonCard>
            <IonCardHeader>
              <IonTitle className="ion-text-center">
                {volume} AF for {price}$/AF
              </IonTitle>
              <IonItemDivider />
            </IonCardHeader>
            <IonCardContent className="ion-text-center">
              <IonText>Water Type: {waterType}</IonText>
              {offerPending && (
                <IonText style={{ display: 'block' }} color="primary">
                  Offer Pending
                </IonText>
              )}
              {!twaiConfirmed && (
                <IonText style={{ display: 'block' }}>
                  Availability Not Verifed
                </IonText>
              )}
              {twaiConfirmed && (
                <IonText style={{ display: 'block' }} color="success">
                  Availability Verified
                </IonText>
              )}
              <Link to={listingsRoute + '/' + _id}>
                <IonButton class="ion-margin-top" expand="full">
                  Details / Make An Offer
                </IonButton>
              </Link>
            </IonCardContent>
          </IonCard>
        </IonCol>
      )
    );
  };
  return (
    <IonGrid>
      <IonRow>{listingCards()}</IonRow>
    </IonGrid>
  );
};
