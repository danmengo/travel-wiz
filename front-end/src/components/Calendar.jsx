import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles
import './CalendarDark.css'; // Import the custom styles

const MyCalendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  // Get today's date to prevent selecting past dates
  const today = new Date();

  // Handle date change (single or range selection)
  const handleDateChange = (dates) => {
    if (Array.isArray(dates)) {
      setSelectedDates(dates);
    } else {
      if (selectedDates.some((selectedDate) => selectedDate.getTime() === dates.getTime())) {
        setSelectedDates(selectedDates.filter((selectedDate) => selectedDate.getTime() !== dates.getTime()));
      } else {
        setSelectedDates([...selectedDates, dates]);
      }
    }
  };

  // Clear all selected dates
  const handleClearSelection = () => {
    setSelectedDates([]);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDates}
        selectRange={true}
        minDate={today}
      />

      <div>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>

      {/* Dark Mode Clear Selected Dates Button */}
      <button onClick={handleClearSelection}>Clear Selected Dates</button>
    </div>
  );
};

export default MyCalendar;