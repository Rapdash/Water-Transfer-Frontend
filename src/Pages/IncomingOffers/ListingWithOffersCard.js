import React from 'react';
import {
  IonCard,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
  IonCardSubtitle,
  IonButton
} from '@ionic/react';

export const ListingWithOffersCard = ({ listing, offers }) => {
  const relevantOffers = offers.filter(offer => {
    if (offer.parentListingId === listing._id) {
      return true;
    }
    return false;
  });
  return (
    <IonCol
      sizeXs={12}
      sizeSm={8}
      offsetSm={2}
      sizeMd={6}
      offsetMd={3}
      sizeLg={6}
      offsetLg={3}
      sizeXl={4}
      offsetXl={4}
    >
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className='ion-text-center'>
            {listing.volume} AF for ${listing.price}/AF
          </IonCardTitle>
          <IonCardSubtitle className='ion-text-center'>
            {listing.waterType}
          </IonCardSubtitle>
        </IonCardHeader>
        {}
        <IonCardContent className='ion-text-center'>
          {relevantOffers.length > 0 && (
            <IonButton>
              View {relevantOffers.length} Offer
              {relevantOffers.length > 1 && 's'}
            </IonButton>
          )}
          {relevantOffers.length === 0 && (
            <IonButton color='medium'>No Offers</IonButton>
          )}
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};
