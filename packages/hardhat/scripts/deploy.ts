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
  // Deploy greeter
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Greetings, LOCALHOST.");
  const network = await greeter.provider.getNetwork();

  await greeter.deployed();
  const networkName =
    network.chainId === LOCALHOST_CHAIN_ID ? "localhost" : network.name;

  writeOutputData("Greeter", greeter.address, networkName);

  // Deploy tweeter
  const Tweeter = await ethers.getContractFactory("Tweeter");
  const tweeter = await Tweeter.deploy("Tweet, tweet , LOCALHOST.");

  await tweeter.deployed();
  writeOutputData("Tweeter", tweeter.address, networkName);

  console.log("Deployed to network: ", network);
  console.log("Greeter deployed to:", greeter.address);
  console.log("Tweeter deployed to:", tweeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
