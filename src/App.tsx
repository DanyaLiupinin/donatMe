import { useEffect, useState } from 'react';
import './App.css';
import { connector } from './connector';
import { TonWalletsList, Menu, Transaction } from '@pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useWallet } from '@hooks';
import { ChakraProvider } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { toUserFriendlyAddress } from '@tonconnect/sdk';

function App() {
  const [walletList, setWalletList] = useState<any>();
  const [wallet2, setWallet2] = useState<string>('');
  const location = useLocation();

  const userFriendlyAddress = wallet2 ? toUserFriendlyAddress(wallet2) : null;
  const slicedAddress = userFriendlyAddress
    ? userFriendlyAddress.slice(0, 4) + '...' + userFriendlyAddress.slice(-4)
    : null;

  const wallet: any = useWallet();

  useEffect(() => {
    connector.getWallets().then((res) => {
      setWalletList(res);
    });
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      if (connector?.account?.address !== '') {
        setWallet2(connector?.account?.address as string);
        console.log(connector.account);
      }
    }
  }, [location, connector.account]);

  return (
    <div className=" bg-black h-[100vh]">
      <Routes>
        <Route path="/" element={<Menu wallet={slicedAddress} />} />
        <Route path="/ton-wallets" element={<TonWalletsList walletList={walletList} />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  );
}

export default AppWrapper;
