import React from 'react';

import { IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

export const Form = ({ children }) => (
  <IonGrid style={{ margin: 0 }}>
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
          <IonCardContent>{children}</IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
);
