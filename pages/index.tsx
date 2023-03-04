import type { NextPage } from 'next'
import Head from 'next/head'
import Gallery from './gallery'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
            <title>Image Gallery</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {/* <Gallery /> */}
        </main>
    </div>
  )
}

export default Home
