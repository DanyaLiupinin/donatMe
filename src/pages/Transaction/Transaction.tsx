import { useWallet } from "@hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Transaction = () => {
  const wallet = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet) navigate("/ton-wallets");
  }, []);

  return (
    <div className="text-white">
      <Link className="text-white absolute left-5 top-0" to="/">
        Back
      </Link>
      <p>Donat</p>
      <input className="p-1 text-black " type="number" />
      <p>Ton</p>

      <button className="border p-2 mt-10" type="button">
        Send
      </button>
    </div>
  );
};
