import React, { useEffect, useState } from 'react';
import { IonSpinner } from '@ionic/react';
import Axios from 'axios';

export const ListingDetailPage = ({ match }) => {
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

  if (loading) return <IonSpinner />;
  console.log(listing);

  return <>{listing.creatorId && <div>lol</div>}</>;
};
