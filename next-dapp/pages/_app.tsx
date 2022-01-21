import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const chains = defaultChains;

const connectors = () => {
  return [new InjectedConnector({ chains })];
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider autoConnect connectors={connectors}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default App;
