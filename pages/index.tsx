import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import TweetBox from '../components/TweetBox'

const Home: NextPage = () => {
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="grid grid-cols-9">
          <Sidebar />

          <Feed />

          <Widgets />
        </main>
      
      
    </div>
  )
}

export default Home
