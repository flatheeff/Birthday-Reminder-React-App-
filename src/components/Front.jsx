import React from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
    <div>
      <div className='flex p-5 justify-between text-lg items-center text-white font-bold'>
      <img className='md:44 w-44' src="https://png.pngtree.com/png-clipart/20221122/ourmid/pngtree-happy-birthday-text-effect-png-image_241348.png" alt=""/>
      </div>

        <div className="flex flex-col text-center p-36 text-black  justify-center items-center gap-10">
            <h1 className="md:text-5xl text-white font-bold italic ">BIRTHDAY</h1>
            <p className="md:text-3xl text-white text-white italic">All the best wishes for my best friend! I hope you're enjoying your special day doing whatever it is you want! Wowee, another loop around the sun. HAPPY BIRTHDAY</p>
            <div className="md:flex flex-row items-center gap-5 font-bold">
            <button className='md:text-2xl w-32  border-2 p-3 rounded-xl font-bold text-white'><Link to="/login">Login</Link></button>
            <button className='md:text-2xl w-32  border-2 p-3 rounded-xl font-bold text-white'><Link to="/signup">Signup</Link></button>
            </div>
            
            </div>
        </div>

  )
}

export default Front