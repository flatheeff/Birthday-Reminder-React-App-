import React from 'react'
import SingleEmployee from '../components/SingleEmployee'
import { Link } from 'react-router-dom'

const EmployeeDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 '>
      <h1 className='text-white font-bold text-4xl italic '>OUR EMPLOYEES</h1>
      <button className='md:text-2xl w-32  border-2 p-5 rounded-xl font-bold text-white gap-5'><Link to="/birthday">Today Birthday</Link></button>
       <SingleEmployee /> 
    </div>
  )
}

export default EmployeeDetails