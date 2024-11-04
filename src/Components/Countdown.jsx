import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Count.css";

const Countdown = () => {
  const navigate = useNavigate();

  const getTargetDate = () => {
    // Check if there's already a target date in localStorage
    const savedTargetDate = localStorage.getItem("targetDate");

    if (savedTargetDate) {
      return new Date(savedTargetDate);
    } else {
      // Set a new target date 3 hours from now and save it to localStorage
      const targetDate = new Date(Date.now() + 3 * 60 * 60 * 1000);
      localStorage.setItem("targetDate", targetDate.toISOString());
      return targetDate;
    }
  };

  const calculateTimeRemaining = (target) => {
    const now = new Date();
    const total = target - now;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);
    return { total, days, hours, minutes, seconds };
  };

  const targetDate = getTargetDate();
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining.total <= 0) {
        clearInterval(interval);
        localStorage.removeItem("targetDate"); // Clear target date after countdown ends
        navigate("/another-page");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, targetDate]);

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-value">{days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{seconds}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
