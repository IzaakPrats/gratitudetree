import { GratitudeFeedItemData } from './data'
import { getShortAddress } from '../utils/formatters'
import { useEffect, useState } from 'react'

type GratitudeFeedItemProps = {
  data: GratitudeFeedItemData
}

const GratitudFeedItem = ({ data }: GratitudeFeedItemProps) => {
  const [numberOfLikes, setNumberOfLikes] = useState(0)

  useEffect(() => {
    getNumberOfLikes(1)
      .then((result: number) => {
        setNumberOfLikes(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  async function getNumberOfLikes(tokenId: number) {
    try {
      const result = await fetch(`/api/likes/goerli/${tokenId.toString()}`)
      const data = await result.json()
      console.log(data)
      return data['numberOfLikes']
    } catch (error: any) {
      console.log(error)
    }
  }

  async function handleOnClickLike() {}

  return (
    <div className='p-8 w-full gap-y-4 max-w-xl flex flex-col justify-between	border shadow rounded-lg text-slate-600 bg-white'>
      <div>
        <p className='font-bold text-lg'>{data.title}</p>
        <p className='italic'>
          Thoughtfully written by{' '}
          <a
            href={`https://goerli.etherscan.io/address/${data.creator}`}
            target='_blank'
            rel='noreferrer'
          >
            <span className='px-2 py-1 rounded text-white font-bold bg-red-400 hover:bg-red-200'>
              {getShortAddress(data.creator)}
            </span>
          </a>
        </p>
        <p className='my-4'>{data.message}</p>
        <p className='my-2 italic'>{data.location}</p>
      </div>
      <div className='flex flex-row justify-between'>
        <a
          className='px-4 py-2 hover:bg-red-200 rounded-lg font-bold shadow'
          href={data.link}
          target='_blank'
          rel='noreferrer'
        >
          Opensea
        </a>

        <div className='flex flex-row gap-x-4 items-center'>
          <button
            className='font-bold px-4 py-2 hover:bg-red-200 rounded-lg shadow'
            onClick={handleOnClickLike}
          >
            Like
          </button>
          <p className=''>{numberOfLikes} Likes</p>
        </div>
      </div>
    </div>
  )
}

export default GratitudFeedItem
