import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSpinner,
  IonInput
} from '@ionic/react';

export const CreateListingPage = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol
          sizeXs={12}
          sizeSm={10}
          offsetSm={1}
          sizeMd={8}
          offsetMd={2}
          sizeLg={6}
          offsetLg={3}
          sizeXl={6}
          offsetXl={3}
        >
          <IonCard>
            <IonCardHeader color="primary">
              <IonCardTitle className="ion-text-center">
                Create Listing
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
