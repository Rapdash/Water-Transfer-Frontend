import React, { useEffect, useState } from 'react';
import { IonSpinner } from '@ionic/react';
import Axios from 'axios';

import { MakeOfferView } from './MakeOfferView';

export const ListingDetailPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);
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

  if (loading) return <IonSpinner />;

  return (
    <>
      {listing.creatorId && <div>lol</div>}
      {!listing.creatorId && <MakeOfferView listing={listing} />}
    </>
  );
};
