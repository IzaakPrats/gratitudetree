import { useContractRead, useNetwork } from "wagmi";

type UseReadContractInfoProps = {
  contractName: string;
  methodName: string;
};

const useReadContractInfo = ({
  contractName,
  methodName,
}: UseReadContractInfoProps) => {
  const [{ data: networkData }] = useNetwork();
  const contractAbi =
    require(`../data/${contractName}/${contractName}.json`).abi;
  const chainName = networkData?.chain?.name?.toLowerCase() || "localhost";
  const contractAddress =
    require(`../data/${contractName}/${chainName}.json`).address;
  const [{ data }] = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: contractAbi,
    },
    methodName,
    {
      watch: true,
    }
  );

  return { data, address: contractAddress };
};

export default useReadContractInfo;
