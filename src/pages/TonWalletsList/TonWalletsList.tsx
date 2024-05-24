import {
  isWalletInfoCurrentlyInjected,
  isWalletInfoRemote,
} from "@tonconnect/ui-react";
import { connector } from "../../connector";
import { Section } from "../../components/Section/Section";

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
    <Section>
      <div className="m-auto flex flex-col gap-3">
        {walletList &&
          walletList.map((wallet: any, index: number) => (
            <div
              onClick={() => onClickWallet(wallet)}
              className="flex between-content items-center gap-3 bg-[#73abff4a] p-2 rounded"
              key={index}
            >
              <img src={wallet.imageUrl} alt="" className="w-[20px] h-[20px]" />
              <p className="text-white">{wallet.name}</p>
            </div>
          ))}
      </div>
    </Section>
  );
};
