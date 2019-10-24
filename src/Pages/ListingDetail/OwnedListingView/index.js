import React from 'react';
import { Page } from '../../../components/shared';
import {
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCardTitle
} from '@ionic/react';
import { Form } from '../../../components/shared/Form';
import { OwnedListingOfferCard } from './OwnedListingOfferCard';

export const OwnedListingView = ({ listing }) => {
  return (
    <Page title='View Listing & Offers'>
      <Form>
        <IonList>
          <IonItem className='item-interactive'>
            <IonLabel>Water Type: {listing.waterType}</IonLabel>
          </IonItem>
          <IonItem className='item-interactive'>
            <IonLabel>Available Volume: {listing.volume} AF</IonLabel>
          </IonItem>
          {listing.partialPurchaseOk && (
            <IonItem className='item-interactive'>
              <IonLabel>
                Minimum Purchase Volume: {listing.minimumVolume} AF
              </IonLabel>
            </IonItem>
          )}
          {!listing.partialPurchaseOk && (
            <IonItem className='item-interactive'>
              <IonLabel>No Partial Purchases</IonLabel>
            </IonItem>
          )}
          {listing.partialPurchaseOk && (
            <IonItem className='item-interactive'>
              <IonLabel>Minumum Purchase: {listing.minimumVolume} AF</IonLabel>
            </IonItem>
          )}
          <IonItem className='item-interactive'>
            <IonLabel>Listed Price: ${listing.price}/AF</IonLabel>
          </IonItem>
        </IonList>
      </Form>
      <IonCardTitle style={{ fontSize: 25 }} className='ion-text-center'>
        Offers On This Listing
      </IonCardTitle>
      <IonGrid>
        <IonRow>
          <OwnedListingOfferCard listing={listing} />
        </IonRow>
      </IonGrid>
    </Page>
  );
};
