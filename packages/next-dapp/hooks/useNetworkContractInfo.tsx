import { useNetwork } from "wagmi";

type UseNetworkContractInfoProps = {
  contractName: string;
};

const useNetworkContractInfo = ({
  contractName,
}: UseNetworkContractInfoProps) => {
  const [{ data: networkData }] = useNetwork();
  const chainName = networkData?.chain?.name?.toLowerCase() || "localhost";
  const contractAddress =
    require(`../data/${contractName}/${chainName}.json`).address;
  return { chainName, contractAddress };
};

export default useNetworkContractInfo;
