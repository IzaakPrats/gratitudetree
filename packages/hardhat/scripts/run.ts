import { ethers } from "hardhat";

const main = async () => {
  const nftContractFactory = await ethers.getContractFactory("GratitudeNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("NFT contract deployed to: ", nftContract.address);

  console.log("--------------------------------------");

  await nftContract.mint("title1", "message1", "location1");
  await nftContract.mint("title2", "message2", "location2");

  console.log(await nftContract.getLatestGratitudeData(5));
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
