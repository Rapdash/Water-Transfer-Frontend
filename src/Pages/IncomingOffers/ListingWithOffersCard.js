import React from 'react';
import {
  IonCard,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonText
} from '@ionic/react';
import { Link } from 'react-router-dom';

import { listings, lis } from '../../constants/routes';

export const ListingWithOffersCard = ({ listing, offers }) => {
  const relevantOffers = offers.filter(offer => {
    if (offer.parentListingId === listing._id) {
      return true;
    }
    return false;
  });
  return (
    <IonCol sizeXs={12} sizeSm={8} sizeMd={6} sizeLg={6} sizeXl={4}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className='ion-text-center'>
            {listing.volume} AF for ${listing.price}/AF
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className='ion-text-center'>
          {listing.offerPending && (
            <IonText style={{ display: 'block' }} color='primary'>
              Offer Pending
            </IonText>
          )}
          <IonText>Type: {listing.waterType}</IonText>
          {!listing.twaiConfirmed && (
            <IonText style={{ display: 'block' }}>
              Availability Not Verifed
            </IonText>
          )}
          {listing.twaiConfirmed && (
            <IonText style={{ display: 'block' }} color='success'>
              Availability Verified
            </IonText>
          )}
          {relevantOffers.length > 0 && (
            <Link to={listings + '/' + listing._id}>
              <IonButton expand='full'>
                View {relevantOffers.length} Offer
                {relevantOffers.length > 1 && 's'} / Remove
                {relevantOffers.length > 1 && 's'}
              </IonButton>
            </Link>
          )}
          {relevantOffers.length === 0 && (
            <IonButton expand='full' color='medium'>
              No Offers
            </IonButton>
          )}
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};
