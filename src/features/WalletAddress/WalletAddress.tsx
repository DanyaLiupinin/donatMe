import { useState } from "react";
import { connector } from "../../connector";

export const WalletAddress = ({
  address,
  className = "",
}: {
  address: string;
  className?: string;
}) => {
  const [isSelectOpened, setSelectOpened] = useState(false);

  const onDisconnectWallet = async () => {
    await connector.disconnect();
  };

  return (
    <div className={className}>
      <p
        onClick={() => setSelectOpened(!isSelectOpened)}
        className="text-white text-end"
      >
        {address}
      </p>
      {isSelectOpened && (
        <div className="bg-white rounded">
          <button onClick={onDisconnectWallet}>Disconnect</button>
        </div>
      )}
    </div>
  );
};
