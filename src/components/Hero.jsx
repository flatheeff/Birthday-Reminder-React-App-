import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>

        <div className="flex flex-col text-center p-36 text-black  justify-center items-center gap-10">
            <h1 className="md:text-5xl text-white font-bold italic ">BIRTHDAY</h1>
            <p className="md:text-3xl text-white text-white italic">All the best wishes for my best friend! I hope you're enjoying your special day doing whatever it is you want! Wowee, another loop around the sun. HAPPY BIRTHDAY</p>
            
            <button className='md:text-2xl w-32  border-2 p-3 rounded-xl font-bold text-white'><Link to="/register">Employee Details</Link></button>
            
            </div>
        </div>

  )
}

export default Hero