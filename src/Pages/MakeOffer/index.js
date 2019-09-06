import React from 'react';
import {
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonItemDivider,
  IonList,
  IonInput,
  IonRow,
  IonCol
} from '@ionic/react';

export const MakeOfferPage = () => {
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
            <IonCardHeader>
              <IonCardTitle>Make offer</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
