import { useEffect, useState } from 'react';
import './App.css';
import { connector } from './connector';
import { TonWalletsList, Menu, Transaction } from '@pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLoggedIn, useWallet } from '@hooks';

function App() {
  const [walletList, setWalletList] = useState<any>();
  const loggedIn = useLoggedIn();

  const wallet: any = useWallet();

  useEffect(() => {
    connector.getWallets().then((res) => {
      setWalletList(res);
    });
  }, []);

  return (
    <div className=" bg-black h-[100vh]">
      <Router>
        <Routes>
          <Route path="/" element={<Menu wallet={wallet} />} />
          <Route path="/ton-wallets" element={<TonWalletsList walletList={walletList} />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
