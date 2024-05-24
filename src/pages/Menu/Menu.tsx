import { Link } from "react-router-dom";
import { useWallet } from "../../hooks/useWallet";

export const Menu = () => {
  const wallet = useWallet();

  console.log(wallet);

  return (
    <div>
      {wallet && <p className="text-white">{wallet}</p>}
      <Link
        to="/ton-wallets"
        className="text-white outline outline-1 outline-white p-2 fixed top-5 right-5"
      >
        Authorization
      </Link>
      <button className="text-white outline outline-1 outline-white p-2 absolute mx-auto my-auto w-fit h-fit top-0 bottom-0 left-0 right-0">
        Donat
      </button>
    </div>
  );
};
