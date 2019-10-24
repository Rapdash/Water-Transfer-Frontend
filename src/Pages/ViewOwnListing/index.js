import React, { useEffect, useState } from 'react';

import { Page } from '../../components/shared';

export const ViewOwnListing = () => {
  const [listing, setListing] = useState(null);
  const [offers, setOffers] = useState(null);

  useEffect(() => {});
  return <Page title='My Listing Detail' />;
};
