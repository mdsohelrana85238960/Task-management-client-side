

// TaskCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Task Calendar</h1>
      <div className="flex justify-center">
        <Calendar onChange={onChange} value={date} />
      </div>
      {/* Additional content or tasks related to the selected date can be added here */}
    </div>
  );
};

export default Calender;
