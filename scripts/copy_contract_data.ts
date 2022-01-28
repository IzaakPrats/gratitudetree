const fs = require("fs-extra");

async function main() {
  if (process.argv.length == 2) {
    console.error("Expected at least one argument!");
    process.exit(1);
  }

  const contractNameFlagIndex = process.argv.indexOf("--name");
  if (contractNameFlagIndex < 0) {
    console.log("Did not specify data output directory");
    process.exit(1);
  }

  const contractName = process.argv[contractNameFlagIndex + 1];
  const sourceDir = `./packages/hardhat/deployed_contracts/${contractName}`;
  const dir = `./packages/next-dapp/data/${contractName}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.copySync(sourceDir, dir);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
