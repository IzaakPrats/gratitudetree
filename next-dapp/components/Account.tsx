import { useAccount } from "wagmi";
import { getShortAddress } from "../utils";
import utilStyles from "../styles/util.module.css";

const Account = () => {
  const [{ data: accountData, error, loading }, disconnect] = useAccount({
    fetchEns: true,
  });

  const canProgrammaticallyDisconnect = () => {
    return accountData?.connector && accountData.connector.name !== "MetaMask";
  };

  if (!accountData) {
    return <p>No connected account.</p>;
  }

  return (
    <div className={utilStyles.container}>
      <p>
        {accountData.ens?.name
          ? accountData.ens.name
          : getShortAddress(accountData.address)}
      </p>
      <p>Connected to {accountData.connector?.name}</p>
      {canProgrammaticallyDisconnect() ? (
        <button className={utilStyles.cta} onClick={disconnect}>
          Disconnect
        </button>
      ) : (
        <p>Disconnect your account directly through Metamask</p>
      )}
    </div>
  );
};

export default Account;
