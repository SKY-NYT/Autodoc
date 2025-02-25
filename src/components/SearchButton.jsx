import React,{ useRef } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useState } from 'react'

const SearchButton = () => {
    const [isOpen,setIsOpen] = useState(false);
const inputRef =useRef(null)
const handlesearchClick = ()=> {
  setTimeout(()=>inputRef.current?.focus(),100)
  setIsOpen(true)
}
const handleBlur = ()=>{
  setIsOpen(false)
}
  return (
    <>
     {
       !isOpen ? (<FaMagnifyingGlass onClick={handlesearchClick} className=''/>)
       :(<input
        
        ref={inputRef}
        type="text"
        placeholder="Search"
        className=" p-0.5 border rounded-md"
        onClick = {handleBlur}/>
      )
       }
      
    </>
  )
}

export default SearchButton