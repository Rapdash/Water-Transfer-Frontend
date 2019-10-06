import React, { useState } from 'react';
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
  IonInput
} from '@ionic/react';

export const CreateListingPage = () => {
  const [price, setPrice] = useState(null);
  const [volume, setVolume] = useState(null);

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
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel position="floating" color="primary">
                    Asking Price:
                  </IonLabel>
                  <IonInput
                    onInput={e => setPrice(e.target.value)}
                    value={price}
                    type="number"
                    inputMode="numeric"
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating" color="primary">
                    Water Volume:
                  </IonLabel>
                  <IonInput
                    onInput={e => setVolume(e.target.value)}
                    value={volume}
                    type="number"
                    inputMode="numeric"
                  />
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
