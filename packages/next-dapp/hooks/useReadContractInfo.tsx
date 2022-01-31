import { useContractRead, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import { Result } from "ethers/lib/utils";

type UseReadContractInfoProps = {
  contractName: string;
  methodName: string;
};

const useReadContractInfo = ({
  contractName,
  methodName,
}: UseReadContractInfoProps) => {
  const [contractData, setContractData] = useState<Result | undefined>();
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

  useEffect(() => {
    setContractData(data);
  }, [data]);

  return { data: contractData, address: contractAddress };
};

export default useReadContractInfo;
