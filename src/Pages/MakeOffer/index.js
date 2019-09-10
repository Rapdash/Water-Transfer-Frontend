import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
  IonSpinner,
  IonInput
} from '@ionic/react';

export const MakeOfferPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);

  const [counterOfferShown, setCounterOfferShown] = useState(false);
  const [counterPrice, setCounterPrice] = useState(null);

  const [partialPurchaseShown, setPartialPurchaseShown] = useState(false);
  const [partialVolume, setPartialVolume] = useState(null);

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
                Make Offer
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem className="item-interactive">
                  <IonLabel>Water Type: {listing.waterType}</IonLabel>
                </IonItem>
                <IonItem className="item-interactive">
                  <IonLabel>Available Volume: {listing.volume} AF</IonLabel>
                </IonItem>
                {listing.partialPurchaseOk && (
                  <IonItem className="item-interactive">
                    <IonLabel>
                      Minumum Purchase: {listing.minimumVolume} AF
                    </IonLabel>
                  </IonItem>
                )}
                <IonItem className="item-interactive">
                  <IonLabel>Listed Price: ${listing.price}/AF</IonLabel>
                </IonItem>
                {!counterOfferShown && (
                  <IonItem
                    className="ion-margin-top"
                    button
                    color="medium"
                    onClick={() => {
                      setCounterOfferShown(true);
                    }}
                  >
                    <IonLabel position="inline" className="ion-text-center">
                      Click here to counter-offer
                    </IonLabel>
                  </IonItem>
                )}
                {counterOfferShown && (
                  <IonItem>
                    <IonLabel color="primary" position="floating">
                      Set Counter Price (in $/AF):
                    </IonLabel>
                    <IonInput
                      type="number"
                      inputMode="numeric"
                      value={counterPrice}
                      onInput={e => setCounterPrice(e.target.value)}
                    />
                  </IonItem>
                )}
                {!partialPurchaseShown && (
                  <IonItem
                    button
                    color="dark"
                    onClick={() => {
                      setPartialPurchaseShown(true);
                    }}
                  >
                    <IonLabel position="inline" className="ion-text-center">
                      Click here for a partial purchase.
                    </IonLabel>
                  </IonItem>
                )}
                {partialPurchaseShown && (
                  <IonItem>
                    <IonLabel color="primary" position="floating">
                      Volume You'd Like to Purchase (AF)
                    </IonLabel>
                    <IonInput
                      type="number"
                      inputMode="numeric"
                      value={partialVolume}
                      onInput={e => setPartialVolume(e.target.volume)}
                    />
                  </IonItem>
                )}
                <IonItem
                  className="ion-margin-top"
                  button
                  color="primary"
                  onClick={() => {}}
                >
                  <IonLabel position="inline" className="ion-text-center">
                    Submit Your Offer
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
