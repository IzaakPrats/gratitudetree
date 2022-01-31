import ContractInfo from "./ContractInfo";
import contractJson from "../data/Greeter/Greeter.json";
import contractInfo from "../data/Greeter/local.json";

const CONTRACT_ADDRESS = contractInfo.address;
const CONTRACT_ABI = contractJson.abi;
const CONTRACT_NAME = "Greeter";

const GreeterContractInfo = () => {
  return (
    <ContractInfo
      contractName={CONTRACT_NAME}
      contractAddress={CONTRACT_ADDRESS}
      contractAbi={CONTRACT_ABI}
    />
  );
};

export default GreeterContractInfo;
