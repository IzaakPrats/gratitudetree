import { useContract, useNetwork } from "wagmi";
import useGetContract from "../hooks/useGetContract";
import utilStyles from "../styles/util.module.css";

type ContractInfoProps = {
  contractName: string;
};

const ContractInfo = ({ contractName }: ContractInfoProps) => {
  const contract = useGetContract({
    contractName: contractName,
  });

  return (
    <div className={utilStyles.container}>
      <p>
        <span className={utilStyles.field}>Contract Address:</span>{" "}
        {contract.address}
      </p>
    </div>
  );
};

export default ContractInfo;
