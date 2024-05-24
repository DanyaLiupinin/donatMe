import {
  isWalletInfoCurrentlyInjected,
  isWalletInfoRemote,
} from "@tonconnect/ui-react";
import { connector } from "../../connector";
import { Section, WalletBadge } from "@components";

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
            <WalletBadge
              key={index}
              wallet={wallet}
              onClickWallet={onClickWallet}
            />
          ))}
      </div>
    </Section>
  );
};
