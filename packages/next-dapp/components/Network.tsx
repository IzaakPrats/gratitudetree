import { Stack } from "@chakra-ui/react";
import { useNetwork } from "wagmi";

const Network = () => {
  const [{ data: networkData }] = useNetwork();

  if (!networkData || !networkData.chain) {
    return <p>Not connected to eth network.</p>;
  }

  const currentChain = networkData.chain;
  return (
    <Stack>
      <p>
        Connected to <span>{currentChain.name}</span>.
      </p>
      {currentChain.unsupported && <p>{currentChain.name} unsupported.</p>}
    </Stack>
  );
};

export default Network;
