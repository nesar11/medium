import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='flex items-center justify-between py-10 bg-yellow-400 border-black border-y lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='max-w-xl font-serif text-6xl'> <span className='underline decoration-black decoration'>Medium</span> is a place to write, read, and connect</h1>
        <h2> It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
          <img className='hidden h-32 md:inline-flex lg:h-full' 
          src="https://www.seekpng.com/png/small/48-483822_open-medium-logo-svg.png" alt="" />
      </div>

</div>
  )
}

export default Home
