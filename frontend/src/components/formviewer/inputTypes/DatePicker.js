import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerComponent = ({ answer, handleAnswerChange,index }) => {
//   const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="border-x-0 border-t-0 p-2"
        placeholderText="Select a date"
        
        selected={answer}
        onChange={(date) => handleAnswerChange(index,date)}
      />
    </div>
  );
};

export default DatePickerComponent;
