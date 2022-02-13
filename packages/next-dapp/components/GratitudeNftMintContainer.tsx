import { BigNumber } from "ethers";
import { useEffect } from "react";
import useContractWithSigner from "../hooks/useContractWithSigner";

const CONTRACT_NAME = "GratitudeNFT";

const GratitudeNftMintContainer = () => {
  const contract = useContractWithSigner({ contractName: CONTRACT_NAME });

  const onNewGratitudeMinted = (
    owner: string,
    tokenId: BigNumber,
    gratitudeData: {}
  ) => {
    console.log("New nft %d minted by %s.", tokenId.toNumber(), owner);
    console.log("NFT data: ", gratitudeData);
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

  const mintNft = async () => {
    try {
      const mintNftTxn = await contract.mint("title", "message", "location");
      console.log("Minted.", mintNftTxn.hash);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-8 space-y-8 p-8 max-w-sm border text-center shadow rounded-lg">
      <p>What are you grateful for?</p>
      <button
        className="rounded rounded-lg py-2 px-4 shadow bg-indigo-300 hover:bg-indigo-200"
        onClick={mintNft}
      >
        Mint
      </button>
    </div>
  );
};

export default GratitudeNftMintContainer;
