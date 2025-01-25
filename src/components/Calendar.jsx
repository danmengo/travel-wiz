import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles
import './CalendarDark.css'; // Import the custom styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date()); // State to store selected date

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };

  return (
    <div>
      <h2>Pick a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date} // Set the selected date
        // firstDayOfWeek={1} // Set Monday as the first day of the week
        minDate={new Date()}
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
