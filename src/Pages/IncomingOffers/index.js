import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { Page } from '../../components/shared';

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
  return <Page title='Incoming Offers'></Page>;
};
