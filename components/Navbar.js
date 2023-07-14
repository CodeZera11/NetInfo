import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex w-full max-w-[1480px] bg-black h-[80px] items-center p-10 justify-between text-white'>
      <div> 
          <Image src='/assets/logo.png' width={100} height={100} alt='logo' />
      </div>

      <div className=''>
        <ul className='flex gap-14 justify-between items-center text-xl'>
          <li className='hover:text-red-700 '>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='hover:text-red-700'>
            <Link href={'/about'}>About</Link>
          </li>
          <li className='hover:text-red-700'>
            <Link href={'/movie'}>Movie</Link>
          </li>
          <li className='hover:text-red-700'>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar