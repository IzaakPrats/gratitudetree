import { useContractRead, useNetwork } from "wagmi";

type UseContractReadProps = {
  contractName: string;
  methodName: string;
  methodArgs: [];
};

const useNetworkContractRead = ({
  contractName,
  methodName,
  methodArgs,
}: UseContractReadProps) => {
  const [{ data: networkData }] = useNetwork();
  const contractAbi =
    require(`../data/${contractName}/${contractName}.json`).abi;
  const chainName = networkData?.chain?.name?.toLowerCase() || "localhost";
  const contractAddress =
    require(`../data/${contractName}/${chainName}.json`).address;
  return useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: contractAbi,
    },
    methodName,
    {
      args: methodArgs,
    }
  );
};

export default useNetworkContractRead;
