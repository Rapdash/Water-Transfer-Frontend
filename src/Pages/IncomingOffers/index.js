import React, { useEffect } from 'react';
import Axios from 'axios';

import { Page } from '../../components/shared';

export const IncomingOffersPage = () => {
  useEffect(() => {
    Axios.get('http://localhost:9001/offer/incoming');
  }, []);
  return <Page title='Incoming Offers'></Page>;
};
