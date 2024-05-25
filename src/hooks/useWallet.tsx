import { useEffect, useState } from 'react';
import { connector } from '../connector';

export const useWallet = () => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    return connector.onStatusChange((e: any) => {
      setWallet(e);
    });
  }, []);

  return wallet;
};
