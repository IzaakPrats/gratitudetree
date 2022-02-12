import { useAccount } from "wagmi";
import { getShortAddress } from "../utils";
import { Button, Stack } from "@chakra-ui/react";

const Account = () => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  const canProgrammaticallyDisconnect = () => {
    return accountData?.connector && accountData.connector.name !== "MetaMask";
  };

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
      <p>
        Connected to <span>{accountData.connector?.name}</span>
      </p>
      {canProgrammaticallyDisconnect() ? (
        <Button onClick={disconnect}>Disconnect</Button>
      ) : (
        <p>Disconnect your account directly through Metamask</p>
      )}
    </Stack>
  );
};

export default Account;
