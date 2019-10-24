import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonPage
} from '@ionic/react';

import { Form } from '../';

export const Page = ({ title, form, children }) => (
  <IonPage>
    <IonCard style={{ overflow: 'scroll' }}>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center' style={{ fontSize: 30 }}>
          {title}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent style={{ paddingLeft: 8, paddingRight: 8 }}>
        {/* For Not-Otherwise-Specified Views */}
        {!form && children}

        {/* For Form-Based Views */}
        {form && <Form>{children}</Form>}
      </IonCardContent>
    </IonCard>
  </IonPage>
);
