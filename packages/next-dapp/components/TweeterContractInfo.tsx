import ContractInfo from "./ContractInfo";

const CONTRACT_NAME = "Tweeter";

const TweeterContractInfo = () => {
  return (
    <div>
      <ContractInfo contractName={CONTRACT_NAME} methodName="tweety" />
    </div>
  );
};

export default TweeterContractInfo;
