import ContractInfo from "./ContractInfo";
import { GRATITUDE_CONTRACT_NAME } from "../data/constants";

const GratitudeNftContractInfo = () => {
  return (
    <div className="font-mono">
      <ContractInfo contractName={GRATITUDE_CONTRACT_NAME} />
    </div>
  );
};

export default GratitudeNftContractInfo;
