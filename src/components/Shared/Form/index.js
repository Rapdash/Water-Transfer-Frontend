import React from 'react';

import { IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

export const Form = ({ children }) => (
  <IonGrid style={{ margin: 0, padding: 0 }}>
    <IonRow>
      <IonCol
        style={{ padding: 0 }}
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
          <div style={{ paddingLeft: 8, paddingRight: 8 }}>{children}</div>
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
);
