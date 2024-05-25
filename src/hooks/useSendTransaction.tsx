import { useState } from 'react';
import { connector } from '../connector';

export const useSendTransaction = () => {
  const [userConfirmedTransaction, setUserConfirmedTransaction] = useState(false);

  const sendTransaction = async () => {
    setUserConfirmedTransaction(true);
    const tx = {
      validUntil: Math.round(Date.now() / 1000) + 600,
      messages: [
        {
          address: '0:' + '0'.repeat(64),
          amount: '100000'
        }
      ]
    };

    try {
      await connector.sendTransaction(tx);
    } catch (e) {
      console.error(e);
    } finally {
      setUserConfirmedTransaction(false);
    }
  };

  return [sendTransaction, userConfirmedTransaction] as const;
};
