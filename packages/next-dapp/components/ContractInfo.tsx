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
    <p>
      <span>Contract Address:</span> {contract.address}
    </p>
  );
};

export default ContractInfo;
