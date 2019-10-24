import React from 'react';
import {
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonText
} from '@ionic/react';

export const NoListingCard = ({ cardInfo, cardTitle }) => (
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
        <IonCardTitle className='ion-text-center'>{cardTitle}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>
          <p className='ion-text-center'>{cardInfo}</p>
        </IonText>
      </IonCardContent>
    </IonCard>
  </IonCol>
);
