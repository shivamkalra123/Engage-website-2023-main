import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Count.css";

const Countdown = () => {
  const navigate = useNavigate();

  // Function to get the next target time (1:45 PM UTC)
  const getNextTargetTime = () => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(13); // 1 PM UTC
    target.setUTCMinutes(45); // 45 minutes
    target.setUTCSeconds(0); // 0 seconds

    // If the current time is already past the target time, set for the next day
    if (
      now.getUTCHours() > 13 ||
      (now.getUTCHours() === 13 && now.getUTCMinutes() >= 45)
    ) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    return target;
  };

  const targetDate = getNextTargetTime(); // Get the target date

  const calculateTimeRemaining = () => {
    const now = new Date();
    const total = targetDate - now; // Difference in milliseconds
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, hours, minutes, seconds };
  };

  // Initialize state with the calculated time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      // Check if time is up
      if (updatedTimeRemaining.total <= 0) {
        clearInterval(interval);
        navigate("/another-page"); // Navigate to another page when countdown ends
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, targetDate]); // Include targetDate in dependencies

  const { hours, minutes, seconds } = timeRemaining;

  return (
    <div className="countdown">
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
