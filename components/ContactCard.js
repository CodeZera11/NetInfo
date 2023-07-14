'use client'

import Link from 'next/link'
import { useState } from 'react'
import {MdEmail, MdForum, MdVoiceChat} from 'react-icons/md'

const ContactCard = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault()


    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: "POST",
            headers: {"Content_Type": "application/json"},
            body: JSON.stringify({ name, email, phone, message })
        })
    
        if(response.status === 200){
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
            setStatus('success')
        }else{
            setStatus('error')
        }
    } catch (error) {
        console.log(error)
    } finally{
        setTimeout(()=>{setStatus(null)}, 3000)
    }

   

  }

  return (
    <>
        <div className='container max-w-[1470px] mb-10'>
            <div className='grid grid-cols-3 gap-x-36 gap-y-10 mt-12 p-8  mx-auto'>
                <div className='flex flex-col shadow-xl justify-center items-center border-2'>
                        <div className='mt-5'> <MdEmail size={50} color='#E30A15'  /> </div> 
                        <h2 className='font-extrabold mt-3 text-2xl'>Email</h2>
                        <p className='mt-4 text-gray-600 text-sm'>Monday to Friday Expected</p>
                        <p className='text-gray-600 text-sm'>response time: 72 hours</p>
                        <Link href={'/'}>
                            <button className='mt-5 mb-3 text-gray-500'>Send Email &rarr;</button>
                        </Link>
                </div>
                <div className='flex flex-col shadow-xl justify-center items-center border-2'>
                        <div className='mt-5'> <MdVoiceChat size={50} color='#E30A15'  /> </div> 
                        <h2 className='font-extrabold mt-3 text-2xl'>Live Chat</h2>
                        <p className='mt-4 text-gray-600 text-sm'>Weekdays: 9 AM — 6 PM ET</p>
                        <p className='text-gray-600 text-sm'>Weekends: 9 AM — 5 PM ET</p>
                        <Link href={'/'}>
                            <button className='mt-5 mb-3 text-gray-500'>Chat Now &rarr;</button>
                        </Link>
                </div>
                <div className='flex flex-col shadow-xl justify-center items-center border-2'>
                        <div className='mt-5'> <MdForum size={50} color='#E30A15'  /> </div> 
                        <h2 className='font-extrabold mt-3 text-2xl'>Community Forum</h2>
                        <p className='mt-4 text-gray-600 text-sm'>Monday to Friday Expected</p>
                        <p className='text-gray-600 text-sm'>response time: 72 hours</p>
                        <Link href={'/'}>
                            <button className='mt-5 mb-3 text-gray-500'>Ask The Community &rarr;</button>
                        </Link>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-20'>
                <h1 className='text-4xl'>We'd love to hear <span className='text-red-800'>from you</span></h1>
                <form className='mt-5 border-2 px-24 py-6 text-center' onSubmit={handleSubmit}>
                    <label for="name" className='text-lg'>Enter Your Name</label><br/>
                    <input type="text" className='bg-gray-300 text-sm w-[300px] p-2 m-1 outline-none rounded-full' id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/><br/>

                    <label for="name" className='text-lg '>Enter Your Email</label><br/>
                    <input type="text" className='bg-gray-300 text-sm w-[300px] p-2 m-1 outline-none rounded-full' id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/><br/>

                    <label for="name" className='text-lg '>Enter Your Phone Number</label><br/>
                    <input type="text" className='bg-gray-300 text-sm w-[300px] p-2 m-1 outline-none rounded-full' id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your phone number'/><br/>

                    <label for="message" className='text-lg' >Enter Your Message</label><br/>
                    <input type="text" className='bg-gray-300 text-sm w-[300px] p-2 m-1 outline-none rounded-full' id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter your message'/><br/>

                    <div>
                        {status === 'success' && <p>Thank you for the message</p>}
                        {status === 'error' && <p>Failed to send your message</p>}
                        <input type="submit" value="Submit" className='mt-3 bg-black w-[100px] rounded-full text-white p-2 cursor-pointer'/>
                    </div>
                </form>
            </div>

            
            <div className='mt-24 w-full mx-auto'>
                <h1 className='text-5xl mb-5 text-center'>Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15373.021836674832!2d75.84410470258176!3d25.17535747335045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84d3da5d2e57%3A0x74f15c617091ef4b!2sKota%20Airport!5e0!3m2!1sen!2sin!4v1689270218450!5m2!1sen!2sin" width={600} height={450} style={{border:0}} className='w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            
        </div>
    </>
  )
}

export default ContactCard