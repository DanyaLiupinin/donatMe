import { FC, useEffect, useState } from 'react';
import { ReactQrCode } from '@devmehq/react-qr-code';
import { connector } from '../../connector';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface IQRProps {
  isOpen: boolean;
  onClose: () => void;
  walletInfo: any;
}

export const QRModal: FC<IQRProps> = ({ isOpen, onClose, walletInfo }) => {
  const [walletConnectionUrl, setWalletConnectionUrl] = useState<any>();
  const navigate = useNavigate();

  const onClickConnect = () => {
    window.open(walletConnectionUrl, '_blank');
    onClose();
  };

  useEffect(() => {
    if (walletInfo) {
      setWalletConnectionUrl(
        connector.connect({
          bridgeUrl: walletInfo.bridgeUrl,
          universalLink: walletInfo.universalLink
        })
      );
    }
  }, [walletInfo]);

  return (
    isOpen && (
      <div className="flex flex-col absolute mx-auto my-auto top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#0e0d0db5]">
        <button onClick={onClose} className="text-white outline outline-1 mb-4 p-2">
          Close
        </button>
        <ReactQrCode renderAs="svg" value={walletConnectionUrl} />
        <Link to="/" onClick={onClickConnect} className="text-white outline outline-1 mt-4 p-2 w-[256px]">
          CONNECT
        </Link>
      </div>
    )
  );
};
