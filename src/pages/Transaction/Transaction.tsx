import { Spinner } from '@components';
import { useWallet, useSendTransaction } from '@hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { connector } from '../../connector';

export const Transaction = () => {
  // const wallet = useWallet();
  const navigate = useNavigate();
  const [sendTransaction, userConfirmedTransaction] = useSendTransaction();
  const [value, setValue] = useState<number>(0);
  //useEffect(() => {
  //if (!wallet) navigate('/ton-wallets');
  //}, []);

  const onSendTransaction = async () => {
    await sendTransaction({ amount: value }); // продумать как выводить информацию о том, что мы ждем платежа // сделать кнопку отмены
    navigate('/');
  };
  return (
    <>
      <Spinner loading={userConfirmedTransaction} />
      <div className="text-white">
        <Link className="text-white absolute left-5 top-0" to="/">
          Back
        </Link>
        <p>Donat</p>
        <input onChange={(e) => setValue(Number(e.currentTarget.value))} className="p-1 text-black " type="number" />
        <p>Ton</p>

        <button onClick={onSendTransaction} className="border p-2 mt-10" type="button">
          Send
        </button>
      </div>
    </>
  );
};
