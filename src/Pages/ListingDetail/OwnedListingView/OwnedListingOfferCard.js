import React from 'react';

import { IonCol, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

export const OwnedListingOfferCard = ({ listing }) => (
  <IonCol sizeXs={12} sizeSm={8} sizeMd={6} sizeLg={6} sizeXl={4}>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center'>
          {listing.volume} AF for ${listing.price}/AF
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  </IonCol>
);
