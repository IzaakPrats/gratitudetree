import { useNetwork } from "wagmi";
import utilStyles from "../styles/util.module.css";

const Network = () => {
  const [{ data: networkData }] = useNetwork();

  if (!networkData || !networkData.chain) {
    return <p>Not connected to eth network.</p>;
  }

  const currentChain = networkData.chain;
  return (
    <div className={utilStyles.container}>
      <p>
        Connected to <span>{currentChain.name}</span>.
      </p>
      {currentChain.unsupported && <p>{currentChain.name} unsupported.</p>}
    </div>
  );
};

export default Network;
