import React, { useState } from "react";

const TwelveHourTimeInput = ({
  value,
  onChange,
  answer,
  index,
  handleAnswerChange,
}) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [ampm, setAMPM] = useState("AM");
  const [errors, setErrors] = useState({
    hours: false,
    minutes: false,
    ampm: false,
  });

  const handleTimeChange = () => {
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i;
    if (timeRegex.test(formattedTime) || formattedTime === "") {
      handleAnswerChange(index, formattedTime);
    }
  };
  const handleHourChange = (event) => {
    const inputHours = event.target.value;
    if (inputHours === "" || (inputHours >= 0 && inputHours <= 12)) {
      setHours(inputHours);
      setErrors({
        ...errors,
        hours: false,
      });
      handleTimeChange();
    } else {
      setErrors({
        ...errors,
        hours: true,
      });
    }
  };

  const handleMinuteChange = (event) => {
    const inputMinutes = event.target.value;
    if (
      inputMinutes === "" ||
      (inputMinutes >= 0 && inputMinutes <= 59 && inputMinutes.length <= 2)
    ) {
      setMinutes(inputMinutes);
      handleTimeChange();
      console.log(inputMinutes.length);
    }
    if (inputMinutes.length === 2)
      setErrors({
        ...errors,
        minutes: false,
      });
    else {
      setErrors({
        ...errors,
        minutes: true,
      });
    }
  };

  const handleAMPMChange = (event) => {
    const inputAMPM = event.target.value.toUpperCase();
    if (inputAMPM === "AM" || inputAMPM === "PM") {
      setAMPM(inputAMPM);
      handleTimeChange();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={hours}
        onChange={handleHourChange}
        placeholder="hh"
        className={`border rounded-md px-3 py-2 text-sm w-12 focus:outline-none focus:border-blue-500 ${
          errors.hours ? "border-red-500" : ""
        }`}
      />
      <span className="text-sm">:</span>
      <input
        type="text"
        value={minutes}
        onChange={handleMinuteChange}
        placeholder="mm"
        className={`border rounded-md px-3 py-2 text-sm w-12 focus:outline-none focus:border-blue-500 ${
          errors.minutes ? "border-red-500" : ""
        }`}
      />
      <select
        value={ampm}
        onChange={handleAMPMChange}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      {(errors.minutes || errors.hours) && (
        <p className="text-red-500">Please use 0X format for less than 10</p>
      )}
    </div>
  );
};

export default TwelveHourTimeInput;
