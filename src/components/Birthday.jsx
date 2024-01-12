import React, { useEffect, useState } from 'react';
import supabase from '../supabase/Supabase';

const Birthday = () => {
  const [Day, setDay] = useState(0);
  const [Month, setMonth] = useState('');

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

    setDay(day);
    setMonth(month);

    console.log(`Today is ${day}/${month}`);
  };

  const birth = async () => {
    
      await getTodayDayAndMonth(); // Wait for getTodayDayAndMonth() to complete
      console.log(Day, Month);

      const { data, error } = await supabase
        .from('Birthday')
        .select()
        .eq('Date', Day); // Filter by Date
      // .eq('Month', Month);

      console.log(data);
      if (error) {
        console.log(error);
      }
   
  };

  useEffect(() => {
    birth();
  }, []); // Call birth() on initial render

  return (
    <div>
      <h1 className='text-white font-bold text-4xl italic text-center'>TODAY BIRTHDAY</h1>
    </div>
  );
};

export default Birthday;
