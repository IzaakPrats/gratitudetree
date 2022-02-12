import useContractWithSigner from "../hooks/useContractWithSigner";
import utilStyles from "../styles/util.module.css";
import styles from "./styles/gratitudeNftMintContainer.module.css";

const CONTRACT_NAME = "GratitudeNFT";

const GratitudeNftMintContainer = () => {
  const contract = useContractWithSigner({ contractName: CONTRACT_NAME });

  const mintNft = async () => {
    try {
      const mintNftTxn = await contract.mint("title", "message", "location");
      console.log("Minted.", mintNftTxn.hash);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={utilStyles.container}>
      <p>Mint your NFT below.</p>
      <button className={styles.cta} onClick={mintNft}>
        Mint
      </button>
    </div>
  );
};

export default GratitudeNftMintContainer;
