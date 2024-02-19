import React, {useState, useEffect} from 'react'
import SingleEmployee from '../components/SingleEmployee'
import { Link } from 'react-router-dom'
import supabase from "../supabase/Supabase";

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);

  
  const fetchEmployee = async () => {
    const { data, error } = await supabase
      .from("Birthday")
      .select();

    console.log(data);
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div className='flex flex-col justify-center items-center gap-5 '>
      <h1 className='text-white font-bold text-4xl italic '>OUR EMPLOYEES</h1>
      
       <SingleEmployee employees={employees} /> 
    </div>
  )
}

export default EmployeeDetails