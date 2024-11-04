import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Count.css"; // Import the CSS file

const Countdown = ({ targetDate }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const calculateTimeRemaining = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const total = target - now;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);
    return { total, days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      // Check if time is up
      if (updatedTimeRemaining.total <= 0) {
        clearInterval(interval);
        navigate("/another-page"); // Navigate to AnotherPage
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]); // Include navigate in dependencies

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
