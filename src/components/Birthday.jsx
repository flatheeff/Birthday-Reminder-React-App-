import React, { useEffect, useState } from 'react';
import supabase from '../supabase/Supabase';
import SingleEmployee from './SingleEmployee';

const Birthday = () => {

  const [BirthdayEmployees, setBirthdayEmployees] = useState([]);

  useEffect(() => {
    birth()

  }, []);

  const getTodayDayAndMonth = async () => {
    const today = await new Date();

    let day = today.getDate();
    const monthIndex = today.getMonth();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[monthIndex];

    // Add leading zero if day is less than 10
    day = day < 10 ? `0${day}` : day;

    console.log(`Today is ${day}/${month}`);
    return {
      day, month
    }
  };

  const birth = async () => {

    const { day, month } = await getTodayDayAndMonth(); // Wait for getTodayDayAndMonth() to complete

    const { data, error } = await supabase
      .from('Birthday')
      .select()
      .eq('Date', day)
      .eq('Month', month); // Assuming 'population' is another column you want to filter on
    console.log(data)
    setBirthdayEmployees(data)

    console.log(data);
    if (error) {
      console.log(error);
    }

  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-14">
      <h1 className='text-white font-bold text-4xl italic text-center'>TODAY BIRTHDAY</h1>
      
      <SingleEmployee employees={BirthdayEmployees} />
    </div>
  );
};

export default Birthday;
