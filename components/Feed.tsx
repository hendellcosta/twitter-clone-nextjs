import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from '../components/TweetBox'

function Feed() {
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
        <div className="flex items-center justify-between">
            <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
            <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-logoblue transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
        </div>

        <div>
        <TweetBox />
        </div>
    

    {/* Tweetbox "What's Happening"  */}

    </div>
  )
}

export default Feed