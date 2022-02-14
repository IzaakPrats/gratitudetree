import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import useContractWithSigner from "../hooks/useContractWithSigner";

const CONTRACT_NAME = "GratitudeNFT";

const GratitudeNftMintContainer = () => {
  const contract = useContractWithSigner({ contractName: CONTRACT_NAME });
  const [title, setTitle] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [location, setLocation] = useState<String>("");

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
      const mintNftTxn = await contract.mint(title, message, location);
      console.log("Minted.", mintNftTxn.hash);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto flex flex-col my-16 space-y-4 p-8 w-full max-w-lg border shadow rounded-lg text-slate-600">
      <p className="text-lg font-bold">What are you grateful for?</p>
      <div>
        <p className="text-s font-bold">Title</p>
        <textarea
          className="p-2 w-full border shadow rounded-lg"
          rows={1}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p className="text-s font-bold">Message</p>
        <textarea
          className="p-2 w-full border shadow rounded-lg"
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <p className="text-s font-bold">Location</p>
        <textarea
          className="p-2 w-full border shadow rounded-lg"
          rows={1}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        className="py-2 px-4 rounded rounded-lg shadow bg-indigo-400 hover:bg-indigo-200 text-slate-700 font-bold"
        onClick={mintNft}
      >
        Mint
      </button>
    </div>
  );
};

export default GratitudeNftMintContainer;
