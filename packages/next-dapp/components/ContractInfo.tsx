import useReadContractInfo from "../hooks/useReadContractInfo";
import utilStyles from "../styles/util.module.css";

type ContractInfoProps = {
  contractName: string;
  methodName: string;
};

const ContractInfo2 = ({ contractName, methodName }: ContractInfoProps) => {
  const { data, address } = useReadContractInfo({
    contractName: contractName,
    methodName: methodName,
  });

  return (
    <div className={utilStyles.container}>
      <p>
        <span className={utilStyles.field}>Contract Address:</span> {address}
      </p>
      <p>
        {" "}
        <span className={utilStyles.field}>Contract name:</span> {contractName}
      </p>
      <p>
        <span className={utilStyles.field}>Read {methodName}:</span> {data}
      </p>
    </div>
  );
};

export default ContractInfo2;
