/* 
  This handler will take in a tokenId, pull in the metadata from the chain, and create an SVG on demand. 
*/

const ALCHEMY_KEY = 'ligrFYullfEd6hPhts46CKSCt4QalP9A'

export default function handler(req, res) {
  const { tokenId } = req.query

  var metadata = {
    name: `Gratitude #${tokenId}`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar eget metus non rhoncus.',
    attributes: [],
  }

  // grab metadata from chain
  // const provider = new AlchemyProvider("homestead", ALCHEMY_KEY);
  // TODO @izaak update contract metadata to be public

  // gen attributes
  metadata.attributes.push(
    {
      trait_type: 'Likes',
      value: 0,
    },
    {
      trait_type: 'References',
      value: 0,
    }
  )

  // gen image
  var image = '' // do svg stuff here
  metadata['image_data'] = ''

  res.status(200).json(metadata).end()
}
