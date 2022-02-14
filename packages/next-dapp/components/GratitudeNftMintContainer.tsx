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
    <div className="m-auto flex flex-col my-16 space-y-4 p-8 w-full max-w-lg border shadow rounded-lg">
      <p className="text-lg text-slate-600">What are you grateful for?</p>
      <textarea className="p-2 w-full border shadow rounded-lg" rows={4} />
      <button
        className="py-2 px-4 rounded rounded-lg shadow bg-indigo-300 hover:bg-indigo-200 text-slate-700 font-bold"
        onClick={mintNft}
      >
        Mint
      </button>
    </div>
  );
};

export default GratitudeNftMintContainer;
