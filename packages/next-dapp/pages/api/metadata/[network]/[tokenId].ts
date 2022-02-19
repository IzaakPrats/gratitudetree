import { ethers } from 'ethers'
import fs from 'fs'
import contractData from '../../../../data/GratitudeNFT/GratitudeNFT.json'
import type { GratitudeData } from '../../../../data/types/GratitudeNFT'

/* 
  This handler will take in a tokenId, pull in the metadata from the chain, and create an SVG on demand. 
*/

const ALCHEMY_KEY = 'ligrFYullfEd6hPhts46CKSCt4QalP9A'
const NETWORK = 'goerli'
const LIKES_WALLET_ADDRESS = '0xf3e02c1ff387d4dB5EaAc451c2fF80bc94143C43'
const ETHERSCAN_KEY = 'W7RW8DPMATZAXQI2VMMA8258W9YSPSBDHR'

const convert = (from: any, to: any) => (str: any) =>
  Buffer.from(str, from).toString(to)
const utf8ToHex = convert('utf8', 'hex')
const hexToUtf8 = convert('hex', 'utf8')

export default async function handler(req: any, res: any) {
  const { network, tokenId } = req.query

  // Setup web3
  const provider = new ethers.providers.AlchemyProvider(NETWORK, ALCHEMY_KEY)
  const contractAddress = JSON.parse(
    fs.readFileSync(`./data/GratitudeNFT/${network}.json`, 'utf8')
  )['address']
  const gratitudeNft = new ethers.Contract(
    contractAddress,
    contractData.abi,
    provider
  )

  // Grab gratitude data from the chain
  const chainData: GratitudeData = await gratitudeNft.metadata(tokenId)

  // Setup Etherscan Provider
  const etherscanProvider = new ethers.providers.EtherscanProvider(
    NETWORK,
    ETHERSCAN_KEY
  )

  // Get history
  const likesWalletHistory: any[] = await etherscanProvider.getHistory(
    LIKES_WALLET_ADDRESS
  )
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

  // Process history for likes

  // Compose metadata
  const metadata = {
    name: chainData.title,
    description: `"${chainData.message}" -- ${chainData.location}`,
    attributes: [
      {
        trait_type: 'Likes',
        value: numberOfLikes,
      },
    ],
    image_data: '',
  }

  // Return metadata in JSON format
  res.status(200).json(metadata)
}
