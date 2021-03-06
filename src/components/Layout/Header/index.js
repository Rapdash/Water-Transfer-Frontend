import React from 'react';
import {
  IonIcon,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonButton,
  IonHeader
} from '@ionic/react';
import { menu } from 'ionicons/icons';

export const Header = () => (
  <IonHeader>
    <IonToolbar color='primary'>
      <IonButtons slot='start'>
        <IonMenuToggle>
          <IonButton>
            <IonIcon icon={menu} />
          </IonButton>
        </IonMenuToggle>
      </IonButtons>
      <IonTitle className='ion-text-center' style={{ fontWeight: 'bold' }}>
        Water Exchange Tool{' '}
        <span style={{ fontWeight: 'normal' }} className='ion-hide-sm-down'>
          by The Water Agency Inc.
        </span>
      </IonTitle>
      {/* This Button Just for Specing */}
      <IonButtons slot='end'>
        <IonButton>
          <IonIcon />
        </IonButton>
      </IonButtons>
      {/* End Spacing-Only Button */}
    </IonToolbar>
  </IonHeader>
);
