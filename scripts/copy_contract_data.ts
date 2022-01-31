const fs = require("fs-extra");

async function main() {
  const sourceDir = `./packages/hardhat/deployed_contracts`;
  const dir = `./packages/next-dapp/data`;
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
