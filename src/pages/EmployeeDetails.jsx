import React from 'react'
import SingleEmployee from '../components/SingleEmployee'

const EmployeeDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-purple-500 font-bold text-4xl italic '>OUR EMPLOYEES</h1>
       <SingleEmployee /> 
    </div>
  )
}

export default EmployeeDetails