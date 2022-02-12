import { BigNumber } from "ethers";
import { useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
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
    <Flex
      direction="column"
      mt={20}
      borderWidth={2}
      maxWidth={400}
      borderRadius={4}
      pt={8}
      pb={8}
      pl={20}
      pr={20}
      align="center"
      justify="center"
    >
      <p>Mint your NFT below.</p>
      <Button mt={4} onClick={mintNft}>
        Mint
      </Button>
    </Flex>
  );
};

export default GratitudeNftMintContainer;
