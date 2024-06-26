import { Link } from 'react-router-dom';
import { useWallet } from '../../hooks/useWallet';
import { toUserFriendlyAddress } from '@tonconnect/sdk';
import { WalletAddress } from '@features';

export const Menu = ({ wallet }: any) => {
  return (
    <div>
      {wallet ? (
        <WalletAddress address={wallet} className="absolute top-2 right-2" />
      ) : (
        <Link to="/ton-wallets" className="text-white outline outline-1 outline-white p-2 fixed top-5 right-5">
          Authorization
        </Link>
      )}
      <Link
        to={'/transaction'}
        className="text-white outline outline-1 outline-white p-2 absolute mx-auto my-auto w-fit h-fit top-0 bottom-0 left-0 right-0"
      >
        Donat
      </Link>
    </div>
  );
};
