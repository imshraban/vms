// TimeRange.jsx
import { useState } from "react";

export const useTimeRange = () => {
  const [timeValue, setTimeValue] = useState("24.00");

  // Function to handle range changes and format the value
  const handleTimeRangeChange = (event) => {
    const value = event.target.value;
    const formattedValue = String(value).padStart(2, "0") + ".00";
    setTimeValue(formattedValue);
  };

  return { timeValue, handleTimeRangeChange };
};
