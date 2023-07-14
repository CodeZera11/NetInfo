import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <div className='w-full border-2 mt-10 flex flex-col pt-5 pb-2'>
        <div className='footer-top flex justify-between items-center px-40 w-full'>
            <div>
                <h1 className='text-3xl font-extrabold'>CodeZera</h1>
            </div>
            <div className='flex gap-5 items-center justify-center'>
                <Link href={'https://github.com/CodeZera11'}>
                    <div>
                        <Image alt="image" src={'/socials/github.png'} width={50} height={50}/>
                    </div>
                </Link>
                <Link href={'https://www.reddit.com/user/007CaptainGoGo'}>
                    <div>
                        <Image alt="image" src={'/socials/reddit2.png'} width={50} height={50}/>
                    </div>
                </Link>
                <Link href={'https://twitter.com/yadav_bhavesh73'}>
                    <div>
                        <Image alt="image" src={'/socials/twitter.png'} width={50} height={50}/>
                    </div>
                </Link>
                <Link href={'https://in.linkedin.com/'}>
                    <div>
                        <Image alt="image" src={'/socials/linkedin.png'} width={50} height={50}/>
                    </div>
                </Link>
            </div>
        </div>
        <div className='footer-mid px-40 mt-5 flex gap-56'>
            <div className='flex gap-20'>
                {footerLinks.map((item)=>(
                    <>
                        <div className='flex flex-col gap-1'>
                        <h2 className='text-xl font-bold'>{item.title}</h2>
                        <div>
                            {item.links.map((link)=>(
                                <div className='flex flex-col'>
                                    <h2 className='text-sm mt-1 text-gray-600'>{link.title}</h2>
                                </div>
                            ))}
                        </div>
                        </div>
                    </>
                ))}
            </div>
            <div>
                <h2 className='text-xl font-bold mb-3'>Subscribe</h2>
                <div className='flex flex-col'>
                    <input type='text' placeholder='Enter your email' className='w-[300px] p-2 outline-none border-2 border-white bg-black rounded-lg text-white' />
                    <div className='mt-2 w-full bg-white text-center p-1 cursor-pointer rounded-full'>
                        <button className='text-black text-center'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom flex justify-between w-full px-48 pb-2 mt-12'>
            <div className='flex gap-9 text-gray-600'>
                <p>Copyright © 2023 CodeZera</p>
                <p> All rights reserved</p>
            </div>
            <div className='flex gap-5 text-gray-600'>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer