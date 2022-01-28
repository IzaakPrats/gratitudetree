import { useContractRead } from "wagmi";
import utilStyles from "../styles/util.module.css";

type ContractInfoProps = {
  contractAddress: string;
  contractAbi: string;
};

const ContractInfo = ({ contractAddress, contractAbi }: ContractInfoProps) => {
  const [{ data, error, loading }, read] = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: contractAbi,
    },
    "greet"
  );

  return (
    <div className={utilStyles.container}>
      <p>Contract address is {contractAddress}</p>
      <p>{data}</p>
    </div>
  );
};

export default ContractInfo;
