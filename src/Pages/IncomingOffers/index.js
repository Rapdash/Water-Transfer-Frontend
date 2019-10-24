import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { Page, NoDataCard } from '../../components/shared';

export const IncomingOffersPage = () => {
  const [offers, setOffers] = useState(null);
  useEffect(() => {
    const getOffers = async () => {
      const response = await Axios.get('http://localhost:9001/offer/incoming', {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setOffers(response.data);
    };
    getOffers();
  }, []);
  console.log(offers);
  return (
    <Page title='Incoming Offers'>
      {!offers && (
        <NoDataCard
          cardInfo='Nobody has made offers on your listings yet.'
          cardTitle='No Offers'
        />
      )}
    </Page>
  );
};
