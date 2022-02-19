import { ethers } from 'ethers'

/* 
  This handler will take in a tokenId, pull in the metadata from the chain, and create an SVG on demand. 
*/

const NETWORK = 'goerli'
const LIKES_WALLET_ADDRESS = '0xf3e02c1ff387d4dB5EaAc451c2fF80bc94143C43'
const ETHERSCAN_KEY = 'W7RW8DPMATZAXQI2VMMA8258W9YSPSBDHR'

const convert = (from: any, to: any) => (str: any) =>
  Buffer.from(str, from).toString(to)
const hexToUtf8 = convert('hex', 'utf8')

export default async function handler(req: any, res: any) {
  const { tokenId } = req.query

  // Setup Etherscan Provider
  const etherscanProvider = new ethers.providers.EtherscanProvider(
    NETWORK,
    ETHERSCAN_KEY
  )

  // Get history
  const likesWalletHistory: any[] = await etherscanProvider.getHistory(
    LIKES_WALLET_ADDRESS
  )

  console.log(likesWalletHistory)

  const numberOfLikes = likesWalletHistory
    .map((transaction) => {
      const { data } = transaction
      try {
        return JSON.parse(hexToUtf8(data.substring(2).replace('\n', '')))
      } catch (error: any) {
        return null
      }
    })
    .filter((obj) => obj != null)
    .reduce((sum, likeData) => {
      const { tokenId: likedTokenId } = likeData
      if (likedTokenId == tokenId) {
        return sum + 1
      }
    }, 0)

  console.log(`NUBMEROF LIKES ${numberOfLikes}`)

  // Return metadata in JSON format
  res.status(200).json({
    numberOfLikes: 1,
  })
}
