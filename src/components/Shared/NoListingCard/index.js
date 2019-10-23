import React from 'react';
import {
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonText
} from '@ionic/react';

export const NoListingCard = ({ myListings }) => (
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
        <IonCardTitle className="ion-text-center">No Listings</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>
          {myListings && (
            <p className="ion-text-center">
              There are no listings from other users currently available
            </p>
          )}
          {!myListings && (
            <p className="ion-text-center">
              You don't have any active listings right now.
            </p>
          )}
        </IonText>
      </IonCardContent>
    </IonCard>
  </IonCol>
);
