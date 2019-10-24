import React from 'react';
import { Page } from '../../components/shared';
import { IonList, IonItem, IonLabel } from '@ionic/react';

export const OwnedListingView = ({ listing }) => {
  return (
    <Page title='Listing Editing & Offers' form>
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
    </Page>
  );
};
