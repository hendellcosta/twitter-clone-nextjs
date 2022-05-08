import { SearchIcon } from '@heroicons/react/outline'
import {TwitterTimelineEmbed} from 'react-twitter-embed'



function Widgets() {
  return (
    <div className="col-span-2 mt-2 hidden px-2 lg:inline"> {/* scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin */}
        <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3"> {/*scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin*/}
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Search Twitter" />
        </div>

        <TwitterTimelineEmbed
  sourceType="profile"
  screenName='elonmusk'
  options={{height: 1000}}
/>

    </div>
  )
}

export default Widgets