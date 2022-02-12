// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import fs from "fs";

const LOCALHOST_CHAIN_ID = 31337;

function writeOutputData(
  contractName: string,
  address: string,
  networkName: string
) {
  const dir = `deployed_contracts/${contractName}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const data = `{"address":"${address}"}`;
  fs.writeFileSync(`${dir}/${networkName}.json`, data);
  fs.copyFileSync(
    `artifacts/contracts/${contractName}.sol/${contractName}.json`,
    `${dir}/${contractName}.json`
  );
}

async function main() {
  // Deploy GratitudeNFT
  const gratitudeNFTFactory = await ethers.getContractFactory("GratitudeNFT");
  const gratitudeNFT = await gratitudeNFTFactory.deploy();
  const network = await gratitudeNFT.provider.getNetwork();

  const networkName =
    network.chainId === LOCALHOST_CHAIN_ID ? "localhost" : network.name;

  await gratitudeNFT.deployed();
  writeOutputData("GratitudeNFT", gratitudeNFT.address, networkName);

  console.log("Deployed to network: ", network);
  console.log("GratitudeNFT deployed to:", gratitudeNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
