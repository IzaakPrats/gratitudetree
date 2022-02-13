import useContractWithSigner from "../hooks/useContractWithSigner";
import { getShortAddress } from "../utils";

type ContractInfoProps = {
  contractName: string;
};

const ContractInfo = ({ contractName }: ContractInfoProps) => {
  const contract = useContractWithSigner({
    contractName: contractName,
  });

  return (
    <p>
      <span>Contract Address:</span> {getShortAddress(contract.address)}
    </p>
  );
};

export default ContractInfo;
