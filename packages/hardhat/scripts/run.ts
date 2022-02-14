import { ethers } from "hardhat";

const main = async () => {
  const nftContractFactory = await ethers.getContractFactory("GratitudeNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("NFT contract deployed to: ", nftContract.address);
  await nftContract.mint("title", "message", "location");
  console.log(await nftContract.tokenURI(0));

  console.log("--------------------------------------");

  await nftContract.mint("title1", "message1", "location1");
  console.log(await nftContract.tokenURI(1));

  const metadata = await nftContract.metadata(1);
  console.log(metadata);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
