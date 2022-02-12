import ContractInfo from "./ContractInfo";

const CONTRACT_NAME = "GratitudeNFT";

const GratitudeNFTContractInfo = () => {
  return (
    <div>
      <ContractInfo contractName={CONTRACT_NAME} methodName="currentTokenId" />
    </div>
  );
};

export default GratitudeNFTContractInfo;
