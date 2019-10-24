import React from 'react';
import { Page } from '../../../components/shared';
import {
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCol,
  IonRow,
  IonCardTitle
} from '@ionic/react';
import { Form } from '../../../components/shared/Form';

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
      <IonGrid>
        <IonRow>
          <IonCol sizeXs={12} sizeSm={8} sizeMd={6} sizeLg={6} sizeXl={4}>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='ion-text-center'>
                  {listing.volume} AF for ${listing.price}/AF
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Page>
  );
};
