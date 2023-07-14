import ContactCard from '@/components/ContactCard';
import React from 'react';

const contact = () => {

  return (
    <div className='container bg_gradient max-w-[1470px] flex flex-col items-center'>
      <div className='w-full mt-10'>
          <h2 className='text-5xl text-center'>Contact Us</h2>
        </div>
      <ContactCard />
    </div>
  )
}

export default contact