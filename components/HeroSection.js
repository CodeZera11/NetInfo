import connectToDB from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = ({ title, imageUrl }) => {

  return (
    <main className='w-full relative'>
        <div className='container h-[620px] flex max-w-[1470px] justify-between'>
            <div className='w-[50%] p-10 flex flex-col justify-center mx-auto gap-5'>
                <h1 className='flex align-start mb-3 text-5xl font-extrabold max-w-lg leading-snug'>{title}</h1>
                <p>From award-winning dramas to blockbuster action movies, we've got you covered. Browse our selection of the latest and greatest movies, and find your favourite today.</p>
                <Link href={'/movie'}>
                  <div className='mt-8 border-black'>
                    <button className='bg-black text-white rounded-full py-3 px-7 text-sm hover:text-black hover:bg-white hover:cursor-pointer'>Explore movies</button>    
                  </div> 
                 </Link>    
            </div>
            <div className='flex items-center mx-auto'>
                <Image src={imageUrl} width={500} height={500} alt='hero logo' />
            </div>
        </div>
    </main>
    
  )
}

export default HeroSection