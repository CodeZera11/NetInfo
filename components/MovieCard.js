import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const MovieCard = ({ movie }) => {

  const { id, title, synopsis, backgroundImage: {url} } = movie.jawSummary;

  return (
    <div className='border-4 bg-gray-800 border-white w-[400px] h-[500px]'>
        <div>
            <Image src={`${url}`} width={400} height={100} alt='image..' />
        </div>
        <div className='mt-5 flex flex-col justify-center items-center p-3'>
            <h2 className='text-2xl font-extrabold'>{title}</h2>
            <p className='mt-5 text-gray-400 max-w-xs'>{synopsis.substring(0,100)}...</p>
        </div>
        <Link href={`/movie/${id}`}>
            <div className='flex justify-center items-center mx-auto p-2 mt-6 w-[80%] bg-black rounded-full hover:text-black hover:bg-gray-500 cursor-pointer'>
                <button>Read More</button>
            </div>
        </Link>
    </div>
  )
}

export default MovieCard