import type { AppProps } from "next/app";
import { chain, InjectedConnector, Provider } from "wagmi";
import "../styles/globals.css";

const chains = [chain.goerli, chain.mainnet];

const connectors = () => {
  return [new InjectedConnector({ chains })];
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider connectors={connectors}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default App;
