// CreateListingPage Component

import React, { useState } from 'react';
// import Axios from 'axios';
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import { Page } from '../../components/Layout/Page';

export const CreateListingPage = () => {
  const [price, setPrice] = useState(null);
  const [volume, setVolume] = useState(null);
  const [waterType, setWaterType] = useState('Current Year Project Water');

  const [partialPurchase, setPartialPurchase] = useState(false);
  const [minimumVolume, setMinimumVolume] = useState(null);

  const submit = () => {
    console.log(price, volume, waterType, partialPurchase, minimumVolume);
  };

  return (
    <Page title="Create Listing" form>
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
          <IonLabel position="floating">Water Type:</IonLabel>
          <IonSelect
            interface="action-sheet"
            value={waterType}
            onChange={e => setWaterType(e.target.value)}
          >
            <IonSelectOption value="Current Year Project Water">
              Current Year Project Water
            </IonSelectOption>
            <IonSelectOption value="Other Type">Other Type</IonSelectOption>
          </IonSelect>
        </IonItem>
        {partialPurchase && (
          <IonItem>
            <IonLabel position="floating">
              Minimum Purchase Volume (AF)
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
      <IonList>
        <IonItem
          style={{ cursor: 'pointer' }}
          type="button"
          color={partialPurchase ? 'medium' : 'primary'}
          onClick={() => setPartialPurchase(!partialPurchase)}
        >
          <IonLabel className="ion-text-center">
            Click To {partialPurchase ? 'Disallow' : 'Allow'} Partial Purchase
          </IonLabel>
        </IonItem>
      </IonList>
      <IonList>
        <IonItem
          style={{ cursor: 'pointer' }}
          type="button"
          color={'dark'}
          onClick={() => handleSubmit()}
        >
          <IonLabel className="ion-text-center">Submit</IonLabel>
        </IonItem>
      </IonList>
    </Page>
  );
};
