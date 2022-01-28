import { providers } from "ethers";
import type { AppProps } from "next/app";
import { Chain, chain, Connector, InjectedConnector, Provider } from "wagmi";
import "../styles/globals.css";

const ALCHEMY_ID = process.env.PUBLIC_ALCHEMY_ID as string;
const ETHERSCAN_API_KEY = process.env.PUBLIC_ETHERSCAN_API_KEY as string;
const INFURA_ID = process.env.PUBLIC_INFURA_ID as string;

const LOCALHOST_ID = 31337;
const LOCALHOST_RPC_URL = "http://127.0.0.1:8545";
const LOCALHOST_NAME = "localhost";

const localhostChain: Chain = {
  id: LOCALHOST_ID,
  name: LOCALHOST_NAME,
  rpcUrls: [LOCALHOST_RPC_URL],
  testnet: true,
};

const chains = [chain.goerli, chain.mainnet, localhostChain];
const defaultChain = chain.mainnet;

const connectors = () => {
  return [new InjectedConnector({ chains })];
};

type ProviderConfig = { chainId?: number; connector?: Connector };
const isChainSupported = (chainId?: number) =>
  chains.some((x) => x.id === chainId);

const provider = ({ chainId }: ProviderConfig) => {
  if (chainId === LOCALHOST_ID && isChainSupported(chainId)) {
    return new providers.JsonRpcProvider(LOCALHOST_RPC_URL);
  }
  return providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      ALCHEMY_ID,
      ETHERSCAN_API_KEY,
      INFURA_ID,
    }
  );
};

const webSocketProvider = ({ chainId }: ProviderConfig) =>
  isChainSupported(chainId) && chainId !== LOCALHOST_ID
    ? new providers.InfuraWebSocketProvider(chainId, INFURA_ID)
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
