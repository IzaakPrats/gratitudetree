import { useContractRead } from "wagmi";
import utilStyles from "../styles/util.module.css";

type ContractInfoProps = {
  contractName: string;
  contractAddress: string;
  contractAbi: any;
};

const ContractInfo = ({
  contractName,
  contractAddress,
  contractAbi,
}: ContractInfoProps) => {
  const [{ data, error, loading }, read] = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: contractAbi,
    },
    "greet",
    {
      watch: true,
    }
  );

  return (
    <div className={utilStyles.container}>
      <p>{contractName}</p>
      <p>Contract address is {contractAddress}</p>
      <p>{data}</p>
    </div>
  );
};

export default ContractInfo;
