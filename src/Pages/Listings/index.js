import React, { useState, useEffect } from 'react';
import {
  IonGrid,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonCardContent,
  IonText
} from '@ionic/react';
import Axios from 'axios';

import { ListingCard } from './ListingCard';
import { Page } from '../../components/shared/Page';

export const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const getListings = async () => {
      const response = await Axios.get('http://localhost:9001/listing', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      setListings(response.data);
    };
    getListings();
  }, []);
  return (
    <Page title="For Sale Listings">
      <IonGrid>
        <IonRow>
          {listings &&
            listings[0] &&
            listings.map(listing => (
              <ListingCard listing={listing} key={listing._id} />
            ))}
          {!listings ||
            (!listings[0] && (
              <IonCol
                sizeXs={12}
                sizeSm={8}
                offsetSm={2}
                sizeMd={6}
                offsetMd={3}
                sizeLg={6}
                offsetLg={3}
                sizeXl={4}
                offsetXl={4}
              >
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle className="ion-text-center">
                      No Listings
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <p className="ion-text-center">
                        There are no listings from other users currently
                        available
                      </p>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
        </IonRow>
      </IonGrid>
    </Page>
  );
};
