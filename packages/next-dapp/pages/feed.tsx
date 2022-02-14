import { BigNumber } from "ethers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GratitudeFeedItem } from "../components";
import { GratitudeFeedItemData } from "../components/GratitudeFeedItem";
import { useContractWithSigner, useNetworkContractInfo } from "../hooks";
import { openseaUrl } from "../utils";
import { GratitudeData } from "../types/contractTypes";

const CONTRACT_NAME = "GratitudeNFT";

const Feed = () => {
  const contract = useContractWithSigner({ contractName: CONTRACT_NAME });
  const { chainName, contractAddress } = useNetworkContractInfo({
    contractName: CONTRACT_NAME,
  });
  const [feedData, setFeedData] = useState<GratitudeFeedItemData[]>([]);

  const onNewGratitudeMinted = (
    owner: string,
    tokenId: BigNumber,
    gratitudeData: GratitudeData
  ) => {
    console.log("New nft %d minted by %s.", tokenId.toNumber(), owner);
    console.log("NFT data: ", gratitudeData);
    setFeedData((prevState) => [
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

  const feedItems = () => {
    return feedData.map((feedItemData) => {
      return (
        <GratitudeFeedItem key={feedItemData.timestamp} data={feedItemData} />
      );
    });
  };

  return (
    <div className="m-auto flex flex-col items-center my-8 space-y-4">
      <div className="px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded-lg shadow">
        <Link href="/">Home</Link>
      </div>
      {feedItems()}
    </div>
  );
};

export default Feed;
