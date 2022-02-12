import { ethers } from "ethers";
import { useContract, useNetwork } from "wagmi";

type UseReadContractInfoProps = {
  contractName: string;
};

const useGetContract = ({
  contractName,
}: UseReadContractInfoProps): ethers.Contract => {
  const [{ data: networkData }] = useNetwork();
  const contractAbi =
    require(`../data/${contractName}/${contractName}.json`).abi;
  const chainName = networkData?.chain?.name?.toLowerCase() || "localhost";
  const contractAddress =
    require(`../data/${contractName}/${chainName}.json`).address;
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: contractAbi,
  });

  return contract;
};

export default useGetContract;
