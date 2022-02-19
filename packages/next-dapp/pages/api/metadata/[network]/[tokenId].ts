import { ethers } from 'ethers'
import fs from 'fs'
import contractData from '../../../../data/GratitudeNFT/GratitudeNFT.json'
import type { GratitudeData } from '../../../../data/types/GratitudeNFT'

/* 
  This handler will take in a tokenId, pull in the metadata from the chain, and create an SVG on demand. 
*/

const ALCHEMY_KEY = 'ligrFYullfEd6hPhts46CKSCt4QalP9A'

export default async function handler(req: any, res: any) {
  const { network, tokenId } = req.query

  // Setup web3
  const provider = new ethers.providers.AlchemyProvider('goerli', ALCHEMY_KEY)
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

  // Compose metadata
  const metadata = {
    name: chainData.title,
    description: `"${chainData.message}" -- ${chainData.location}`,
    attributes: [
      {
        trait_type: 'Likes',
        value: 0,
      },
      {
        trait_type: 'References',
        value: 0,
      },
    ],
    image_data: '',
  }

  // Return metadata in JSON format
  res.status(200).json(metadata)
}
