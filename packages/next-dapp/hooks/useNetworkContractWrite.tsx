import { useContractWrite, useNetwork } from "wagmi";

type UseContractWriteProps = {
  contractName: string;
  methodName: string;
  methodArgs: [];
};

const useNetworkContractWrite = ({
  contractName,
  methodName,
  methodArgs,
}: UseContractWriteProps) => {
  const [{ data: networkData }] = useNetwork();
  const contractAbi =
    require(`../data/${contractName}/${contractName}.json`).abi;
  const chainName = networkData?.chain?.name?.toLowerCase() || "localhost";
  const contractAddress =
    require(`../data/${contractName}/${chainName}.json`).address;
  return useContractWrite(
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

export default useNetworkContractWrite;
