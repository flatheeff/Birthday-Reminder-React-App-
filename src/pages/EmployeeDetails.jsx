import React, {useState, useEffect} from 'react'
import SingleEmployee from '../components/SingleEmployee'
import { Link } from 'react-router-dom'
import supabase from "../supabase/Supabase";
import Navbar from '../components/Navbar'

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);

  
  const fetchEmployee = async () => {
    const { data, error } = await supabase
      .from("Birthday")
      .select();

    // console.log(data);
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const DeleteEmployee = async (id) => {
    const result = employees.filter((a) => a.id !== id)

    const { error } = await supabase
      .from('Birthday')
      .delete()
      .eq('id', id)

    setEmployees(result)
  }

  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center items-center gap-5 '>
      <h1 className='text-white font-bold text-4xl italic '>OUR EMPLOYEES</h1>
      
       <SingleEmployee employees={employees} DeleteEmployee={DeleteEmployee} /> 
    </div>
    </>
  )
}

export default EmployeeDetails