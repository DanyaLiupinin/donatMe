import { connector } from '../../connector';
import { WalletBadge, QRModal, Spinner } from '@components';
import { isWalletInfoCurrentlyInjected, isWalletInfoRemote } from '@tonconnect/sdk';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useWallet } from '@hooks';
import { useNavigate } from 'react-router-dom';

export const TonWalletsList = ({ walletList }: any) => {
  const [selectedWallet, setSelectedWallet] = useState<any>();
  const [isSpinner, setIsSpinner] = useState(false);
  const wallet = useWallet();
  const navigate = useNavigate();

  const onCloseQRModal = () => setSelectedWallet('');

  const onClickWallet = (walletInfo: any) => {
    console.log(walletInfo);
    if (isWalletInfoRemote(walletInfo)) {
      return setSelectedWallet(walletInfo);
    }

    if (isWalletInfoCurrentlyInjected(walletInfo)) {
      // spinner
      // после подключения - редирект
      return connector.connect({ jsBridgeKey: walletInfo.jsBridgeKey });
    }

    window.open(walletInfo.aboutUrl, '_blank');
  };

  useEffect(() => {
    if (wallet && selectedWallet) {
      onCloseQRModal();
      setIsSpinner(true);
      setTimeout(() => {
        setIsSpinner(false);
        navigate('/');
        window.location.reload();
      }, 2000);
    }
  }, [wallet, selectedWallet]);

  return (
    <>
      <Spinner loading={isSpinner} />

      <div className="h-[100%] mx-auto my-auto top-0 left-0 right-0 bottom-0 w-[90%] h-[90%] flex justify-center flex-col p-[10px] gap-3">
        <Link className="text-white absolute left-5 top-0" to="/">
          Back
        </Link>
        <div className="m-auto flex flex-col gap-3">
          <QRModal isOpen={selectedWallet ? true : false} onClose={onCloseQRModal} walletInfo={selectedWallet} />
          {walletList &&
            walletList.length > 0 &&
            walletList.map((wallet: any, index: number) => (
              <WalletBadge key={index} wallet={wallet} onClickWallet={onClickWallet} />
            ))}
        </div>
      </div>
    </>
  );
};
