// CreateListingPage Component

import React, { useState } from 'react';
import Axios from 'axios';
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { withRouter } from 'react-router-dom';

import { Page } from '../../components/shared/Page';

const BaseCreateListingPage = ({ history }) => {
  const [price, setPrice] = useState(null);
  const [volume, setVolume] = useState(null);
  const [waterType, setWaterType] = useState('Current Year Project Water');

  const [partialPurchaseOk, setPartialPurchaseOk] = useState(false);
  const [minimumVolume, setMinimumVolume] = useState(null);

  const [priceError, setPriceError] = useState(null);
  const [volumeError, setVolumeError] = useState(null);

  const handleSubmit = () => {
    setPriceError(null);
    setVolumeError(null);
    console.log(price, volume, waterType, partialPurchaseOk, minimumVolume);
    if (!price) {
      setPriceError('Price must be set');
    }
    if (price <= 0) {
      setPriceError('Price can not be negative or zero.');
    }
    if (!volume) {
      setVolumeError('Volume must be set');
    }
    if (volume <= 0) {
      setVolumeError('Volume can not be negative or zero.');
    }
    if (!priceError && !volumeError) {
      Axios.post(
        'http://localhost:9001/listing/',
        {
          price,
          volume,
          waterType,
          partialPurchaseOk,
          minimumVolume: minimumVolume || volume
        },
        { headers: { Authorization: localStorage.getItem('token') } }
      )
        .then(() => {
          history.push('/');
        })
        .catch(err => {
          console.log(err.response);
        });
    }
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
        {partialPurchaseOk && (
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
          color={partialPurchaseOk ? 'medium' : 'primary'}
          onClick={() => setPartialPurchaseOk(!partialPurchaseOk)}
        >
          <IonLabel className="ion-text-center">
            Click To {partialPurchaseOk ? 'Disallow' : 'Allow'} Partial Purchase
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

export const CreateListingPage = withRouter(BaseCreateListingPage);
