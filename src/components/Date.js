import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Select a Date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // You can customize the date format
        className="form-control" // Apply Bootstrap's form-control class
      />
      {selectedDate && <p>Selected date: {selectedDate.toDateString()}</p>}
    </div>
  );
};

export default Date;
