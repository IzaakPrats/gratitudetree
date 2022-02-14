import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useContractWithSigner, useNetworkContractInfo } from "../hooks";

const CONTRACT_NAME = "GratitudeNFT";

type GratitudeData = {
  title: string;
  message: string;
  location: string;
};

type Props = {
  onMintSuccess: (
    title: string,
    message: string,
    publishAddress: string
  ) => void;
};

const GratitudeNftMintContainer = ({ onMintSuccess }: Props) => {
  const contract = useContractWithSigner({ contractName: CONTRACT_NAME });
  const { chainName, contractAddress } = useNetworkContractInfo({
    contractName: CONTRACT_NAME,
  });
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const resetForm = () => {
    setTitle("");
    setMessage("");
    setLocation("");
  };

  const getNewNftPublishAddress = (tokenId: number) => {
    return `https://testnets.opensea.io/assets/${chainName}/${contractAddress}/${tokenId}`;
  };

  const onNewGratitudeMinted = (
    owner: string,
    tokenId: BigNumber,
    gratitudeData: GratitudeData
  ) => {
    onMintSuccess(
      gratitudeData?.title,
      gratitudeData?.message,
      getNewNftPublishAddress(tokenId.toNumber())
    );
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
      setIsMinting(true);
      resetForm();
      const mintNftTxn = await contract.mint(title, message, location);
      setIsMinting(false);
      console.log("Minted.", mintNftTxn.hash);
    } catch (error) {
      setIsMinting(false);
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
          value={title}
          rows={1}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p className="text-s font-bold">Message</p>
        <textarea
          className="p-2 w-full border shadow rounded-lg"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <p className="text-s font-bold">Location</p>
        <textarea
          className="p-2 w-full border shadow rounded-lg"
          rows={1}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        className="py-2 px-4 rounded rounded-lg shadow bg-indigo-400 hover:bg-indigo-200 disabled:bg-slate-200 text-slate-700 font-bold"
        disabled={isMinting}
        onClick={mintNft}
      >
        Mint
      </button>
    </div>
  );
};

export default GratitudeNftMintContainer;
