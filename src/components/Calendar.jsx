import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles
import './CalendarDark.css'; // Import the custom styles

const MyCalendar = () => {
  // State for selected dates (multiple dates or date range)
  const [selectedDates, setSelectedDates] = useState([]);

  // Get today's date to prevent selecting past dates
  const today = new Date();

  // Handle date change (single or range selection)
  const handleDateChange = (dates) => {
    if (Array.isArray(dates)) {
      // If the dates array has two dates, it's a range selection
      setSelectedDates(dates);
    } else {
      // Otherwise, handle single date selection
      if (selectedDates.some((selectedDate) => selectedDate.getTime() === dates.getTime())) {
        // Remove the date if it's already selected
        setSelectedDates(selectedDates.filter((selectedDate) => selectedDate.getTime() !== dates.getTime()));
      } else {
        // Add the new date to selected dates
        setSelectedDates([...selectedDates, dates]);
      }
    }
  };

  // Clear all selected dates
  const handleClearSelection = () => {
    setSelectedDates([]);
  };

  return (
    <div>
      <h2>Select Dates (Multiple or Range)</h2>
      
      <Calendar
        onChange={handleDateChange}
        value={selectedDates}  // Pass the selected dates (or range) to the calendar
        selectRange={true}      // Enable range selection
        minDate={today}         // Prevent selecting dates before today
        tileClassName={({ date }) => {
          // Add 'selected' class to selected dates or range
          return selectedDates.some((selectedDate) => selectedDate.getTime() === date.getTime())
            ? 'selected'
            : null;
        }}
      />

      <div>
        <h3>Selected Dates:</h3>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleClearSelection}>Clear Selected Dates</button>
    </div>
  );
};

export default MyCalendar;