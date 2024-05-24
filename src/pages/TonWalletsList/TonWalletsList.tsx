import {
  isWalletInfoCurrentlyInjected,
  isWalletInfoRemote,
} from "@tonconnect/ui-react";
import { connector } from "../../connector";

export const TonWalletsList = ({ walletList }: any) => {
  const onClickWallet = (walletInfo: any) => {
    if (isWalletInfoRemote(walletInfo)) {
      return console.log("qr code");
    }

    if (isWalletInfoCurrentlyInjected(walletInfo)) {
      return connector.connect({ jsBridgeKey: walletInfo.jsBridgeKey });
    }

    window.open(walletInfo.aboutUrl, "_blank");
  };

  return (
    <div className="w-[90%] h-[90%] outline outline-1 outline-[#d289ffa6] flex justify-center flex-col p-[10px] gap-3 bg-[#d289ff5e]">
      {walletList &&
        walletList.map((wallet: any, index: number) => (
          <div
            onClick={() => onClickWallet(wallet)}
            className="w-fit flex between-content align-center gap-3"
            key={index}
          >
            <img src={wallet.imageUrl} alt="" className="w-[20px] h-[20px]" />
            <p className="text-white">{wallet.name}</p>
          </div>
        ))}
    </div>
  );
};
