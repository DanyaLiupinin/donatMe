import { Link } from "react-router-dom";
import { useWallet } from "../../hooks/useWallet";
import { toUserFriendlyAddress } from "@tonconnect/sdk";
import { useState } from "react";
import { connector } from "../../connector";

export const Menu = () => {
  const [isSelectOpened, setSelectOpened] = useState(false);

  const wallet: any = useWallet();
  const userFriendlyAddress = wallet
    ? toUserFriendlyAddress(wallet.account.address)
    : "";
  const slicedAddress =
    userFriendlyAddress.slice(0, 4) + "..." + userFriendlyAddress.slice(-4);

  const onDisconnectWallet = async () => {
    await connector.disconnect();
  };

  return (
    <div>
      {wallet ? (
        <div className="flex flex-col w-fit absolute right-2">
          <p
            onClick={() => setSelectOpened(!isSelectOpened)}
            className="text-white text-end"
          >
            {slicedAddress}
          </p>
          {isSelectOpened && (
            <div className="bg-white rounded">
              <button onClick={onDisconnectWallet}>Disconnect</button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/ton-wallets"
          className="text-white outline outline-1 outline-white p-2 fixed top-5 right-5"
        >
          Authorization
        </Link>
      )}
      <button className="text-white outline outline-1 outline-white p-2 absolute mx-auto my-auto w-fit h-fit top-0 bottom-0 left-0 right-0">
        Donat
      </button>
    </div>
  );
};
