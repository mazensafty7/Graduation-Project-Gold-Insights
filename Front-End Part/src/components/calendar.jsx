import React, { useState } from "react";


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const daysInMonth = 30;
  const firstDayOffset = 1; // Adjust according to the actual first day of the month

  const handleDateClick = (day) => {
    setSelectedDate(day);
    
  };

  return (
    <div className="calendar-container">
         <div className="calendar-title"><p>Forecast Duration</p></div>
      <div className="calendar-grid">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="calendar-day-label">{day}</div>
        ))}
        {Array.from({ length: firstDayOffset }).map((_, index) => (
          <div key={`empty-${index}`} className="empty-slot"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <button
            key={index + 1}
            className={`calendar-day ${selectedDate === index + 1 ? "selected" : ""}`}
            onClick={() => handleDateClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
