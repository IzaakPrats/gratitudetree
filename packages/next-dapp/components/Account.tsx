import { useAccount } from "wagmi";
import { getShortAddress } from "../utils";
import { Stack } from "@chakra-ui/react";

const Account = () => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  if (!accountData) {
    return <p>No connected account.</p>;
  }

  return (
    <Stack spacing={0}>
      <p>
        {accountData.ens?.name
          ? accountData.ens.name
          : getShortAddress(accountData.address)}
      </p>
      <p>Connected to {accountData.connector?.name}</p>
    </Stack>
  );
};

export default Account;
