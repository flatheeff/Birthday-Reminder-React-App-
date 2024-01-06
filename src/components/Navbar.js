import React from 'react'
import { Link } from 'react-router-dom'
 

const Navbar = () => {
  return (
    <div className='flex p-5 justify-between text-lg items-center text-white font-bold'>
      <img className='md:44 w-44' src="https://png.pngtree.com/png-clipart/20221122/ourmid/pngtree-happy-birthday-text-effect-png-image_241348.png" alt=""/>
      
      <div className='md:flex flex-row items-center gap-5 font-bold'>
        <p className="hover:text-yellow-500 text-white border-2 border-purple-500 font-bold p-2">Home</p>
        <p className='hover:text-yellow-500 text-white border-2 border-purple-500 font-bold p-2'>
        <Link to="/register" >Employee Details</Link>
      </p>
      <p className='hover:text-yellow-500 text-white border-2 border-purple-500  font-bold p-2 '>Contact</p>
      

      
      </div>
      
    </div>
  )
}

export default Navbar