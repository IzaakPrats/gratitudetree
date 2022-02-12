import { Stack } from "@chakra-ui/react";
import useContractWithSigner from "../hooks/useContractWithSigner";

type ContractInfoProps = {
  contractName: string;
};

const ContractInfo = ({ contractName }: ContractInfoProps) => {
  const contract = useContractWithSigner({
    contractName: contractName,
  });

  return (
    <Stack>
      <p>
        <span>Contract Address:</span> {contract.address}
      </p>
    </Stack>
  );
};

export default ContractInfo;
