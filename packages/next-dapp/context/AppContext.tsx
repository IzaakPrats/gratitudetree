import { BigNumber } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import GratitudeFeedItemData from "../components/data/GratitudeNftFeedItemData";
import { GRATITUDE_CONTRACT_NAME } from "../data/constants";
import { GratitudeData } from "../data/types/GratitudeNFT";
import { useContractWithSigner, useNetworkContractInfo } from "../hooks";
import { openseaUrl } from "../utils";

type AppContextValue = {
  gratitudes: GratitudeFeedItemData[];
};

const AppContext = createContext<AppContextValue>({ gratitudes: [] });

type AppWrapperProps = {
  children?: JSX.Element;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const [gratitudes, setGratitudes] = useState<GratitudeFeedItemData[]>([]);
  const contract = useContractWithSigner({
    contractName: GRATITUDE_CONTRACT_NAME,
  });
  const { chainName, contractAddress } = useNetworkContractInfo({
    contractName: GRATITUDE_CONTRACT_NAME,
  });

  const onNewGratitudeMinted = (
    owner: string,
    tokenId: BigNumber,
    gratitudeData: GratitudeData
  ) => {
    console.log("New nft %d minted by %s.", tokenId.toNumber(), owner);
    console.log("NFT data: ", gratitudeData);
    setGratitudes((prevState) => [
      {
        creator: owner,
        title: gratitudeData.title,
        message: gratitudeData.message,
        location: gratitudeData.location,
        timestamp: gratitudeData.timestamp.toNumber(),
        link: openseaUrl(chainName, contractAddress, tokenId.toNumber()),
      },
      ...prevState,
    ]);
  };

  useEffect(() => {
    if (contract.signer) {
      contract.on("NewGratitudeMinted", onNewGratitudeMinted);
    }

    return () => {
      if (contract) {
        contract.off("NewGratitudeMinted", onNewGratitudeMinted);
      }
    };
  }, [contract, contract.signer]);

  return (
    <AppContext.Provider value={{ gratitudes }}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
