export const openseaUrl = (
  chainName: string,
  contractAddress: string,
  tokenId: number
) => {
  return `https://testnets.opensea.io/assets/${chainName}/${contractAddress}/${tokenId}`;
};
