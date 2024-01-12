import React from 'react'
import SingleEmployee from '../components/SingleEmployee'
import { Link } from 'react-router-dom'

const EmployeeDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 '>
      <h1 className='text-white font-bold text-4xl italic '>OUR EMPLOYEES</h1>
      
       <SingleEmployee /> 
    </div>
  )
}

export default EmployeeDetails