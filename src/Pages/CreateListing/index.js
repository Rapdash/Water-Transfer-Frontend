import React, { useState } from 'react';
// import Axios from 'axios';
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
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

export const CreateListingPage = () => {
  const [price, setPrice] = useState(null);
  const [volume, setVolume] = useState(null);
  const [waterType, setWaterType] = useState('Current Year Project Water');

  const [partialPurchase, setPartialPurchase] = useState(false);
  const [minimumVolume, setMinimumVolume] = useState(null);

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
                  <IonLabel position="floating">Asking Price:</IonLabel>
                  <IonInput
                    onInput={e => setPrice(e.target.value)}
                    value={price}
                    type="number"
                    inputMode="numeric"
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Water Volume:</IonLabel>
                  <IonInput
                    onInput={e => setVolume(e.target.value)}
                    value={volume}
                    type="number"
                    inputMode="numeric"
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Water Type</IonLabel>
                  <IonSelect
                    interface="action-sheet"
                    value={waterType}
                    onChange={e => setWaterType(e.target.value)}
                  >
                    <IonSelectOption value="Current Year Project Water">
                      Current Year Project Water
                    </IonSelectOption>
                    <IonSelectOption value="Other Type">
                      Other Type
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
                {!partialPurchase && (
                  <IonItem
                    type="button"
                    color="medium"
                    onClick={() => setPartialPurchase(true)}
                  >
                    <IonLabel className="ion-text-center">
                      Click To Allow Partial Purchase
                    </IonLabel>
                  </IonItem>
                )}
                {partialPurchase && (
                  <IonItem>
                    <IonLabel position="floating">
                      Minimum Purchase Volume
                    </IonLabel>
                    <IonInput
                      onInput={e => setMinimumVolume(e.target.value)}
                      value={minimumVolume}
                      type="number"
                      inputMode="numeric"
                    ></IonInput>
                  </IonItem>
                )}
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
