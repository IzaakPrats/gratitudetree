import useContractWithSigner from "../hooks/useContractWithSigner";
import utilStyles from "../styles/util.module.css";

type ContractInfoProps = {
  contractName: string;
};

const ContractInfo = ({ contractName }: ContractInfoProps) => {
  const contract = useContractWithSigner({
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
