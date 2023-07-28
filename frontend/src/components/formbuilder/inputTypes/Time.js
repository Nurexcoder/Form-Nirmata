import React, { useState } from 'react';

const TwelveHourTimeInput = ({ value, onChange }) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [ampm, setAMPM] = useState('AM');

  const handleTimeChange = () => {
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    // Basic validation to check if the input matches the 12-hour format (hh:mm AM/PM)
    const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i;

    if (timeRegex.test(formattedTime) || formattedTime === '') {
      onChange(formattedTime);
    }
  };

  const handleHourChange = (event) => {
    const inputHours = event.target.value;
    if (inputHours === '' || (inputHours >= 0 && inputHours <= 12)) {
      setHours(inputHours);
      handleTimeChange();
    }
  };

  const handleMinuteChange = (event) => {
    const inputMinutes = event.target.value;
    if (inputMinutes === '' || (inputMinutes >= 0 && inputMinutes <= 59)) {
      setMinutes(inputMinutes);
      handleTimeChange();
    }
  };

  const handleAMPMChange = (event) => {
    const inputAMPM = event.target.value.toUpperCase();
    if (inputAMPM === 'AM' || inputAMPM === 'PM') {
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
        className="border rounded-md px-3 py-2 text-sm w-12 focus:outline-none focus:border-blue-500"
      />
      <span className="text-sm">:</span>
      <input
        type="text"
        value={minutes}
        onChange={handleMinuteChange}
        placeholder="mm"
        className="border rounded-md px-3 py-2 text-sm w-12 focus:outline-none focus:border-blue-500"
      />
      <select
        value={ampm}
        onChange={handleAMPMChange}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TwelveHourTimeInput;
