import React, { useState } from 'react';
import {
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/react';

export const MakeOfferPage = () => {
  const [counterOfferShown, setCounterOfferShown] = useState(false);
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
                Make offer
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonText>Water Type: Other</IonText>
                </IonItem>
                <IonItem>
                  <IonText>Listed Price: ${500}/AF</IonText>
                </IonItem>
                {!counterOfferShown && (
                  <IonItem
                    button
                    color="medium"
                    onClick={() => {
                      setCounterOfferShown(true);
                    }}
                  >
                    <IonText>Click To Counteroffer</IonText>
                  </IonItem>
                )}
                {counterOfferShown && (
                  <IonItem>
                    <IonInput type="number">
                      <IonLabel>Counter Price ($/AF)</IonLabel>
                    </IonInput>
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
