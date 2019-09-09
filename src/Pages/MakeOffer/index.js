import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
  IonText,
  IonSpinner
} from '@ionic/react';

export const MakeOfferPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);
  const [counterOfferShown, setCounterOfferShown] = useState(false);
  const listingId = match.params.id;
  useEffect(() => {
    const getListings = async () => {
      const response = await Axios.get(
        `http://localhost:9001/listing/${listingId}`,
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      );
      setListing(response.data);
      setLoading(false);
    };
    getListings();
  }, [listingId]);
  if (loading) return <IonSpinner />;
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
                  <IonText>Listed Price: ${listing.price}/AF</IonText>
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
