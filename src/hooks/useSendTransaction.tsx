import { useState } from 'react';
import { connector } from '../connector';
import { createStandaloneToast } from '@chakra-ui/react';
import { UserRejectsError } from '@tonconnect/sdk';

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

    const { toast } = createStandaloneToast();

    try {
      await connector.sendTransaction(tx);

      toast({
        status: 'success',
        title: 'Transaction sent successfully'
      });
    } catch (e) {
      if (e instanceof UserRejectsError) {
        return toast({
          status: 'error',
          title: 'You rejected the transaction'
        });
      }

      toast({
        status: 'error',
        title: 'Unknown error'
      });

      console.error(e);
    } finally {
      setUserConfirmedTransaction(false);
    }
  };

  return [sendTransaction, userConfirmedTransaction] as const;
};
