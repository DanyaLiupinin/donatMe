import { Link } from "react-router-dom";
import { useWallet } from "../../hooks/useWallet";
import { toUserFriendlyAddress } from "@tonconnect/sdk";
import { WalletAddress } from "@features";

export const Menu = () => {
  const wallet: any = useWallet();
  const userFriendlyAddress = wallet
    ? toUserFriendlyAddress(wallet.account.address)
    : "";
  const slicedAddress =
    userFriendlyAddress.slice(0, 4) + "..." + userFriendlyAddress.slice(-4);

  return (
    <div>
      {wallet ? (
        <WalletAddress
          address={slicedAddress}
          className="absolute top-2 right-2"
        />
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
