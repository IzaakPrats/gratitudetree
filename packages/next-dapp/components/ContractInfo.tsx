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
      <p>
        {" "}
        <span className={utilStyles.field}>Contract name:</span> {contractName}
      </p>
      <p>
        <span className={utilStyles.field}>Contract address:</span>{" "}
        {contractAddress}
      </p>
      <p>
        <span className={utilStyles.field}>Greeting:</span> {data}
      </p>
    </div>
  );
};

export default ContractInfo;
