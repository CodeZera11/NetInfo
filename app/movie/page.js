import MovieCard from '@/components/MovieCard';
import React from 'react'

const movie = async () => {

  const url = `${process.env.RAPID_URL}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '359963a74fmshdf20794f4530616p10a6a4jsn5be8a4c8bb98',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
 
  const res = await fetch(url, options);
  const data = await res.json()
  const movies = data.titles

  return (
    <>
      <main className='container text-white bg_gradient max-w-[1470px] flex flex-col'>
        <h1 className='text-6xl text-gray-800 font-extrabold mx-auto mt-[70px]'>Movies Page</h1>

        <div className='grid grid-cols-3 gap-12 mt-12 mx-auto'>
          {movies.map((movie)=>{
            return <MovieCard key={movie.id} movie={movie} />
          })}
        </div>
      </main>
    </>
    
    
  )
}

export default movie