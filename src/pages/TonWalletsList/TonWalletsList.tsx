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
    </Section>
  );
};
