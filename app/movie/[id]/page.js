import Image from 'next/image';
import React from 'react'

const MovieDetail = async ({ params }) => {

    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '359963a74fmshdf20794f4530616p10a6a4jsn5be8a4c8bb98',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options)
    const data = await res.json()

    const main_data = data[0].details

    console.log(main_data.genres)

  return (
    <>
      <div className='container text-white bg_gradient max-w-[1470px] flex flex-col items-center'>
        <div className='mt-[50px]'>
          <h2 className='text-6xl m-3 text-black font-extrabold'>{main_data.title}</h2>
          <p className='my-5 text-center text-xl'>Netflix / {main_data.type}</p>
        </div>
        <div className='flex justify-center'>
          <Image src={main_data.backgroundImage.url} width={700} height={700}/>
        </div>
        <div className='flex justify-between w-[700px] mt-5'>
            {main_data.genres.map((genre)=>{
              return  <h3 className='text-xl text-gray-100 px-5'>{genre.name}</h3>
            })}  
        </div>
        <div className='mt-16 border-t-2 py-9 w-[900px] border-b-2'>
         <p className='text-center text-xl text-gray-100'>{main_data.contextualSynopsis.text} {main_data.currentContextualSynopsis.text}</p> 
        </div>

        <div className='mt-16 w-full flex items-center flex-col justify-center'>
          <h2 className='text-6xl text-black font-extrabold'>Cast</h2>
          <div className='grid grid-cols-3 gap-x-48 gap-y-10 mt-12 mx-auto'>
            {main_data.cast.map((actor)=>{
              return <h2 className='text-center'>{actor.name}</h2>
            })}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default MovieDetail