import React from 'react'
import back from '../assets/images/back.png'

const Background = () => {
  return (
    <section className='   text-white flex justify-center' >
      <div className='flex-col  border-x-28 w-full  '>
        <div className='relative overflow-hidden h-40 '>
            
          <img src={back}className='w-full '/>
          <div className='absolute top-0 w-full h-40 grid place-items-center'>
          <h1 className=' text-6xl text-center text-white '>About Us</h1>
          </div>
              </div>

      </div>
    </section>
  )
}

export default Background