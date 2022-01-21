import type { AppProps } from "next/app";
import { defaultChains, InjectedConnector, Provider } from "wagmi";
import "../styles/globals.css";

const chains = defaultChains;

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
