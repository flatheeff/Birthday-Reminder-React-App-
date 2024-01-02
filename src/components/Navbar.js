import React from 'react'
 

const Navbar = () => {
  return (
    <div className='flex p-5 justify-between text-lg items-center text-white font-bold'>
      <img className='md:44 w-44' src="https://png.pngtree.com/png-clipart/20221122/ourmid/pngtree-happy-birthday-text-effect-png-image_241348.png" alt=""/>
      
      <div className='md:flex flex-row items-center gap-5 font-bold'>
        <p className="hover:text-yellow-500 text-white border-2 border-red-500 font-bold">Home</p>
      <p className='hover:text-red-500 text-white border-2 border-red-500 font-bold'>Employee Details</p>
      <p className='hover:text-red-500 text-white border-2 border-red-500 font-bold '>Contact</p>
      

      
      </div>
      
    </div>
  )
}

export default Navbar