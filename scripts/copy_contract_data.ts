const fs = require("fs-extra");

async function copyContractData() {
  const contractDir = `./packages/hardhat/deployed_contracts`;
  const destDir = `./packages/next-dapp/data`;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copySync(contractDir, destDir);
}

copyContractData()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
