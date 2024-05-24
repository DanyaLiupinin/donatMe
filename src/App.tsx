import { useEffect, useState } from "react";
import "./App.css";
import { connector } from "./connector";
import { TonWalletsList, Menu } from "@pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [walletList, setWalletList] = useState<any>();

  useEffect(() => {
    connector.getWallets().then((res) => {
      setWalletList(res);
      console.log(res);
    });
  }, []);

  return (
    <div className=" bg-black h-[100vh]">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route
            path="/ton-wallets"
            element={<TonWalletsList walletList={walletList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
