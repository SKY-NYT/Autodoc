import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'

const End = () => {
  return (
    <>
    <footer >
      <section className='   text-white flex justify-center' >
        <div className='  bg-neutral-200 pt-10 flex-col  border-x-28 w-full ' >
        <div className='flex justify-center space-x-96 pb-10'>
        <p className='text-black text-3xl text-center '>Need One Of Them? Give Us a Call Now!</p>
        <button className='bg-orange-600 rounded-full px-7 py-2.5 '> CONTACT US</button>
        </div>
        
       <div className='bg-neutral-950  p-4 ' >
        <div  className='flex  justify-around '>
          <div>
          <span className='text-xl'>Our Services</span>
          <br/>
          <br/>
            <ul>
              <li>- Mechanics</li>
              <li>- Car checks</li>
              <li>- Oil and Break Checks</li>
              <li>- Breakdown Service</li>
              <li>- Tire Change</li>
              <li>- Battery Change</li>

            </ul>

          </div>
          <div><span span className='text-xl'>Opening Hours</span>
          <br/>
         <br/>
            <p>Mon - Fri: 7am - 10pm</p>
            <p>Sat: 7am -3pm</p>
          <br/>
          <div className=' flex gap-4'><FaLinkedin size={30}/> <FaInstagram size={30}/> <FaFacebook size={30}/></div>

          </div>
         <div> <span span className='text-xl'>Contact Us</span>
         <br/>
         <br/>
         <p>Kumasi-Ghana</p>
         <br/>
         
         <p>Tel:0596498103</p>
         <p>Email:fiko8464@gmail.com</p>
         <br/>
         <br/>
         <div className='text-3xl '>
         <span className='text-orange-600'>AUTO</span>DOCS
      
         </div>
          </div>
         </div>
         <div className='grid place-items-center pt-15 pb-3'><hr className='text-amber-50 w-5/6 '/></div>
         <div className='grid place-items-center'>© {new Date().getFullYear()} by Osei Kofi Frimpong.</div>
        </div>
        
        
        
        </div>
        

      </section>
    
    </footer>
    
    </>
  )
}

export default End