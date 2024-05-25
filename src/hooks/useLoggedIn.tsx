import { useEffect, useState } from 'react';
import { connector } from '../connector';

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (connector.account?.address) setLoggedIn(true);
  });

  return loggedIn;
};
