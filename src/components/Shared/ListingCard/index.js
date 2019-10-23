import React from 'react';
import {
  IonCol,
  IonCard,
  IonCardHeader,
  IonTitle,
  IonItemDivider,
  IonCardContent,
  IonText,
  IonButton
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { listings as listingsRoute } from '../../../constants/routes';

export const ListingCard = ({ listing, myListing }) => {
  const {
    _id,
    waterType,
    twaiConfirmed,
    price,
    volume,
    offerPending
  } = listing;
  return (
    <IonCol sizeXs={12} sizeSm={6} sizeMd={6} sizeLg={6} sizeXl={4}>
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
          {!myListing && (
            <Link to={listingsRoute + '/' + _id}>
              <IonButton class="ion-margin-top" expand="full">
                Details / Make An Offer
              </IonButton>
            </Link>
          )}
          {myListing && (
            <Link to={listingsRoute + '/' + _id}>
              <IonButton class="ion-margin-top" expand="full">
                Edit / Remove
              </IonButton>
            </Link>
          )}
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};
