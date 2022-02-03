const fs = require("fs-extra");

async function main() {
  const contractDir = `./packages/hardhat/deployed_contracts`;
  const typesDir = `./packages/hardhat/typechain-types`;
  const destDir = `./packages/next-dapp/data`;
  const typesDestDir = `./packages/next-dapp/data/types`;
  if (!fs.existsSync(typesDestDir)) {
    fs.mkdirSync(typesDestDir, { recursive: true });
  }
  fs.copySync(contractDir, destDir);
  fs.copySync(typesDir, typesDestDir);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
