import ContractInfo from "./ContractInfo";

const CONTRACT_NAME = "Greeter";

const GreeterContractInfo = () => {
  return (
    <div>
      <ContractInfo contractName={CONTRACT_NAME} methodName="greet" />
    </div>
  );
};

export default GreeterContractInfo;
