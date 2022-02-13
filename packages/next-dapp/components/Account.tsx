import { useAccount } from "wagmi";
import { getShortAddress } from "../utils";

const Account = () => {
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  });

  if (!accountData) {
    return <p>No connected account.</p>;
  }

  return (
    <div>
      <p>
        {accountData.ens?.name
          ? accountData.ens.name
          : getShortAddress(accountData.address)}
      </p>
      <p>Connected to {accountData.connector?.name}</p>
    </div>
  );
};

export default Account;
