import { useEffect, useState } from "react";
import "./App.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { connector } from "./connector";
import { TonWalletsList, Menu } from "@pages";

function App() {
  const [walletList, setWalletList] = useState<any>();

  useEffect(() => {
    connector.getWallets().then((res) => {
      setWalletList(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="bg-black h-[100vh]">
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
        {/*<TonWalletsList walletList={walletList} />*/}
        <Menu />
      </TonConnectUIProvider>
    </div>
  );
}

export default App;
