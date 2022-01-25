import { providers } from "ethers";
import type { AppProps } from "next/app";
import { chain, Connector, InjectedConnector, Provider } from "wagmi";
import "../styles/globals.css";

const alchemy = process.env.PUBLIC_ALCHEMY_ID as string;
const etherscan = process.env.PUBLIC_ETHERSCAN_API_KEY as string;
const infuraId = process.env.PUBLIC_INFURA_ID as string;

const chains = [chain.goerli, chain.mainnet];
const defaultChain = chain.mainnet;

const connectors = () => {
  return [new InjectedConnector({ chains })];
};

type ProviderConfig = { chainId?: number; connector?: Connector };
const isChainSupported = (chainId?: number) =>
  chains.some((x) => x.id === chainId);

const provider = ({ chainId }: ProviderConfig) =>
  providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      alchemy,
      etherscan,
      infuraId,
    }
  );
const webSocketProvider = ({ chainId }: ProviderConfig) =>
  isChainSupported(chainId)
    ? new providers.InfuraWebSocketProvider(chainId, infuraId)
    : undefined;

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider
      autoConnect
      connectors={connectors}
      provider={provider}
      webSocketProvider={webSocketProvider}
    >
      <Component {...pageProps} />;
    </Provider>
  );
}

export default App;
