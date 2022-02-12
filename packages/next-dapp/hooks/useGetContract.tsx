import { ethers } from "ethers";
import { useContract, useNetwork, useSigner } from "wagmi";

type UseGetContractProps = {
  contractName: string;
};

const useGetContract = ({
  contractName,
}: UseGetContractProps): ethers.Contract => {
  const [{ data: networkData }] = useNetwork();
  const [{ data: signerData }] = useSigner();
  const contractAbi =
    require(`../data/${contractName}/${contractName}.json`).abi;
  const chainName = networkData?.chain?.name?.toLowerCase() || "localhost";
  const contractAddress =
    require(`../data/${contractName}/${chainName}.json`).address;
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: contractAbi,
    signerOrProvider: signerData,
  });

  return contract;
};

export default useGetContract;
