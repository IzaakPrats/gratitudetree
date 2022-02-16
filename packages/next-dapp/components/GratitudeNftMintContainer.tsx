import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useContractWithSigner, useNetworkContractInfo } from "../hooks";
import { openseaUrl } from "../utils";
import { GRATITUDE_CONTRACT_NAME } from "../data/constants";
import { GratitudeData } from "../data/types/GratitudeNFT";
import { getRandomPrompt } from "../utils/prompts";

const MAX_CHARACTER_COUNT_MESSAGE = 150;
const MAX_CHARACTER_COUNT_TITLE = 50;
const MAX_CHARACTER_COUNT_LOCATION = 50;

type GratitudeNftMintContainerProps = {
  onMintSuccess: (
    title: string,
    message: string,
    publishAddress: string
  ) => void;
};

const GratitudeNftMintContainer = ({
  onMintSuccess,
}: GratitudeNftMintContainerProps) => {
  const [{ data: accountData }] = useAccount();
  const contract = useContractWithSigner({
    contractName: GRATITUDE_CONTRACT_NAME,
  });
  const { chainName, contractAddress } = useNetworkContractInfo({
    contractName: GRATITUDE_CONTRACT_NAME,
  });
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  const resetForm = () => {
    setTitle("");
    setMessage("");
    setLocation("");
  };

  const onNewGratitudeMinted = (
    owner: string,
    tokenId: BigNumber,
    gratitudeData: GratitudeData
  ) => {
    if (accountData?.address.localeCompare(owner) == 0) {
      onMintSuccess(
        gratitudeData?.title,
        gratitudeData?.message,
        openseaUrl(chainName, contractAddress, tokenId.toNumber())
      );
      console.log("New nft %d minted by %s.", tokenId.toNumber(), owner);
      console.log("NFT data: ", gratitudeData);
    }
  };

  useEffect(() => {
    setPrompt(getRandomPrompt());
  }, []);

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

  const characterCount = (maxCharCount: number, charCount: number) => {
    const overCharacterLimit: boolean = maxCharCount - charCount < 0;
    return (
      <p
        className={`text-xs font-bold text-right ${
          overCharacterLimit ? "text-red-600" : "text-slate-600"
        }`}
      >
        {maxCharCount - charCount} remaining
      </p>
    );
  };

  const overMessageCharLimit: boolean =
    MAX_CHARACTER_COUNT_MESSAGE < message.length;
  const overTitleCharLimit: boolean = MAX_CHARACTER_COUNT_TITLE < title.length;
  const overLocationCharLimit: boolean =
    MAX_CHARACTER_COUNT_LOCATION < location.length;
  const overCharLimit: boolean =
    overMessageCharLimit || overTitleCharLimit || overLocationCharLimit;
  const formIncomplete: boolean = message.length == 0 || title.length == 0;

  return (
    <div className="m-auto flex flex-col my-8 space-y-4 p-8 w-full max-w-lg border shadow rounded-lg text-slate-600 bg-white">
      <p className="text-lg font-bold">{prompt}</p>
      <div>
        <p className="text-s font-bold">Title*</p>
        <textarea
          className={`p-2 w-full border shadow rounded-lg ${
            overTitleCharLimit ? "border-red-400 border-2" : "border-slate-200"
          }`}
          value={title}
          rows={1}
          onChange={(e) => setTitle(e.target.value)}
        />
        {characterCount(MAX_CHARACTER_COUNT_TITLE, title.length)}
      </div>
      <div>
        <p className="text-s font-bold">Message*</p>
        <textarea
          className={`p-2 w-full border shadow rounded-lg ${
            overMessageCharLimit
              ? "border-red-400 border-2"
              : "border-slate-200"
          }`}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {characterCount(MAX_CHARACTER_COUNT_MESSAGE, message.length)}
      </div>
      <div>
        <p className="text-s font-bold">Location</p>
        <textarea
          className={`p-2 w-full border shadow rounded-lg ${
            overLocationCharLimit
              ? "border-red-400 border-2"
              : "border-slate-200"
          }`}
          rows={1}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {characterCount(MAX_CHARACTER_COUNT_LOCATION, location.length)}
      </div>
      <button
        className="py-2 px-4 rounded rounded-lg shadow bg-indigo-400 hover:bg-indigo-200 hover:text-slate-600 disabled:bg-slate-200 text-white font-bold"
        disabled={isMinting || overCharLimit || formIncomplete}
        onClick={mintNft}
      >
        Mint
      </button>
      {overCharLimit && (
        <p className="text-xs font-bold text-center text-slate-600">
          Please correct character limit errors.
        </p>
      )}
      {formIncomplete && (
        <p className="text-xs font-bold text-center text-slate-600">
          Please fill out required fields.
        </p>
      )}
    </div>
  );
};

export default GratitudeNftMintContainer;
