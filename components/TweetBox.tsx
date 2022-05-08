import React, { useState } from 'react'
import {
	CalendarIcon,
	EmojiHappyIcon,
	LocationMarkerIcon,
	PhotographIcon,
	SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox() {
    const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://links.papareact.com/gll"
        className="mt-4 h-14 w-14 rounded-full object-cover"
        alt="Profile"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input className="h-24 w-full text-xl outline-none placeholder:text-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening"
          />
          <div className="flex items-center ">
            <div className="flex flex-1 space-x-2 text-logoblue">
              <PhotographIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button className="rounded-full bg-logoblue px-5 py-2 font-bold text-white cursor-pointer disabled:bg-gray-500 disabled:opacity-50"
                    disabled={!input}>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox