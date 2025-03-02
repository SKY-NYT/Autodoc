import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchButton from './searchbutton'
const Navbar = () => {

const linkClass = ({isActive}) => isActive 
?'text-amber-700'
:'hover:text-amber-700' 

  return (
    <nav>
      
      <div className=" place-items-center w-screen fixed  z-10 bg-white">
      <div className='flex justify-center gap-9 p-4 '>
      <div className='text-3xl pr-28 text-'>
        <span className='text-orange-600'>AUTO</span>DOCS
        <p className='text-base '>#1 Automobile Repairs </p>
      </div>
      <div className ='flex gap-8 pt-5'>
        
        <NavLink to='/' className={linkClass}> Home </NavLink>
        <NavLink to='/services' className={linkClass} > Services </NavLink>
        <NavLink to='/about_us' className={linkClass} > About Us </NavLink>
        <NavLink  to='contact_us' className={linkClass}> Contact Us </NavLink>
      </div>
      <div className="pt-4">
        <SearchButton/>   
    </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar