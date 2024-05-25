import { useEffect, useState } from 'react';
import { connector } from '../connector';

export const useWallet2 = ({ currentPathname }: any) => {
  const [wallet2, setWallet] = useState<string | null>(null);

  useEffect(() => {
    if (currentPathname === '/') {
      console.log('2');
      if (connector?.account?.address) {
        setWallet(connector.account.address);
      }
    }
  }, [location]);
  return { wallet2 };
};
