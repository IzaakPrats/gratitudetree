import useGetContract from "../hooks/useGetContract";
import useNetworkContractWrite from "../hooks/useNetworkContractWrite";

const CONTRACT_NAME = "GratitudeNFT";

const GratitudeNftMintContainer = () => {
  const contract = useGetContract({ contractName: CONTRACT_NAME });

  const mintNft = async () => {
    try {
      const mintNftTxn = contract.mint("title", "message", "location");
      console.log("Minting...", mintNftTxn.hash);

      await mintNftTxn.wait();
      console.log("Minted.", mintNftTxn.hash);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Mint your NFT below.</p>
      <button onClick={mintNft}>Mint</button>
    </div>
  );
};

export default GratitudeNftMintContainer;
