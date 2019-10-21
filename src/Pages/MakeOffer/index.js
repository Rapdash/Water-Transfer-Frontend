import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { IonList, IonItem, IonLabel, IonSpinner, IonInput } from '@ionic/react';
import { Page } from '../../components/shared/Page';

export const MakeOfferPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);

  const [counterOfferShown, setCounterOfferShown] = useState(false);
  const [counterPrice, setCounterPrice] = useState(null);
  const [priceError, setPriceError] = useState(null);

  const [partialPurchaseShown, setPartialPurchaseShown] = useState(false);
  const [partialVolume, setPartialVolume] = useState(null);
  const [volumeError, setVolumeError] = useState(null);

  const listingId = match.params.id;

  useEffect(() => {
    const getListing = async () => {
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
    getListing();
  }, [listingId]);

  const handleSubmit = () => {
    // Null out the errors
    setVolumeError(null);
    setPriceError(null);
    const listingId = listing._id;

    if (counterPrice < 0) {
      setPriceError('Price Must Be Above 0');
    }
    if (counterPrice > listing.price) {
      setPriceError(`Price Must Be Below $${listing.price}/AF`);
    }

    if (partialVolume >= listing.minimumVolume) {
      setVolumeError(`Volume Must Be Above ${listing.minimumVolume} AF`);
    }
    if (partialVolume > listing.volume) {
      setVolumeError(`Volume must be below ${listing.volume} AF`);
    }

    if (!volumeError && !priceError) {
      Axios.post('http://localhost:9001/offer/', {
        offerPrice: counterPrice,
        offerVolume: partialVolume,
        parentListingId: listingId
      });
    }
  };

  if (loading) return <IonSpinner />;

  return (
    <Page title="Make Offer" form>
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
              Minimum Purchase Volume: {listing.minimumVolume} AF
            </IonLabel>
          </IonItem>
        )}
        {!listing.partialPurchaseOk && (
          <IonItem className="item-interactive">
            <IonLabel>No Partial Purchases</IonLabel>
          </IonItem>
        )}
        {listing.partialPurchaseOk && (
          <IonItem className="item-interactive">
            <IonLabel>Minumum Purchase: {listing.minimumVolume} AF</IonLabel>
          </IonItem>
        )}
        <IonItem className="item-interactive">
          <IonLabel>Listed Price: ${listing.price}/AF</IonLabel>
        </IonItem>
        {counterOfferShown && (
          <IonItem>
            <IonLabel color="primary" position="floating">
              Set Counter Price ($/AF):
            </IonLabel>
            <IonInput
              type="number"
              inputMode="numeric"
              value={counterPrice}
              onInput={e => setCounterPrice(e.target.value)}
            />
          </IonItem>
        )}
        {partialPurchaseShown && (
          <IonItem>
            <IonLabel color="primary" position="floating">
              Volume You'd Like to Buy (AF)
            </IonLabel>
            <IonInput
              type="number"
              inputMode="numeric"
              value={partialVolume}
              onInput={e => setPartialVolume(e.target.value)}
            />
          </IonItem>
        )}
      </IonList>
      <IonList>
        {listing.partialPurchaseOk && (
          <IonItem
            button
            color="medium"
            lines="full"
            onClick={() => {
              setPartialPurchaseShown(!partialPurchaseShown);
              setPartialVolume(listing.volume);
            }}
          >
            <IonLabel position="inline" className="ion-text-center">
              Click Here to {partialPurchaseShown ? 'Cancel Buying' : 'Buy'}{' '}
              Part
            </IonLabel>
          </IonItem>
        )}
        <IonItem
          button
          color="dark"
          onClick={() => {
            setCounterOfferShown(!counterOfferShown);
            setCounterPrice(listing.price);
          }}
        >
          <IonLabel position="inline" className="ion-text-center">
            Click Here To {counterOfferShown ? 'Cancel' : 'Make'} Counter Offer
          </IonLabel>
        </IonItem>
        <IonItem
          className={
            priceError || volumeError
              ? 'ion-margin-bottom ion-margin-top'
              : 'ion-margin-top'
          }
          button
          type="submit"
          color="primary"
          onClick={() => handleSubmit()}
        >
          <IonLabel position="inline" className="ion-text-center">
            Submit Your Offer
          </IonLabel>
        </IonItem>
        {priceError && (
          <IonItem
            color="danger"
            className={
              volumeError
                ? 'item-interactive ion-text-center ion-margin-bottom'
                : 'item-interactive ion-text-center'
            }
          >
            <IonLabel>{priceError}</IonLabel>
          </IonItem>
        )}
        {volumeError && (
          <IonItem color="danger" className="item-interactive ion-text-center">
            <IonLabel>{volumeError}</IonLabel>
          </IonItem>
        )}
      </IonList>
    </Page>
  );
};
