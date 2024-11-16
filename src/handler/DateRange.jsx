// DateRange.jsx
import { useState, useEffect } from "react";

export const useDateRange = () => {
  const startDate = new Date("01/01/2020");
  const today = new Date();

  // Calculate the number of days between the start date and today
  const diffTime = today - startDate;
  const daysDifference = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Initialize selectedRange to today's date (i.e., the difference in days)
  const [selectedRange, setSelectedRange] = useState(daysDifference);

  const handleDateRangeChange = (event) => {
    const sliderValue = event.target.value;
    setSelectedRange(sliderValue);
  };

  const getSelectedDate = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + parseInt(selectedRange));
    return newDate;
  };

  return {
    startDate,
    today,
    selectedRange,
    daysDifference,
    handleDateRangeChange,
    getSelectedDate,
  };
};
