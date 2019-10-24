import React from 'react';
import {
  IonCard,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonText,
  IonItemDivider
} from '@ionic/react';
import { Link } from 'react-router-dom';

import { listings } from '../../constants/routes';

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
          <IonItemDivider />
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
              <IonButton expand='full' className='ion-margin-top'>
                View {relevantOffers.length} Offer
                {relevantOffers.length > 1 && 's'} / Remove
              </IonButton>
            </Link>
          )}
          {relevantOffers.length === 0 && (
            <IonButton expand='full' color='medium' className='ion-margin-top'>
              No Offers
            </IonButton>
          )}
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};
