import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2023-11-01T00:00:00Z'); // November 1st, 2023

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        months,
        days,
        hours,
        minutes,
        seconds
      });

      if (diff < 0) {
        clearInterval(interval);
        setCountdown({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div>{countdown.months}</div>
        <div className='date'>Month</div>
      </div>
      <div className="countdown-item">
        <div>{countdown.days}</div>
        <div className='date'>Days</div>
      </div>
      <div className="countdown-item">
        <div>{countdown.hours}</div>
        <div className='date'>Hours</div>
      </div>
      <div className="countdown-item">
        <div>{countdown.minutes}</div>
        <div className='date'>Minutes</div>
      </div>
      <div className="countdown-item">
        <div>{countdown.seconds}</div>
        <div className='date'>Seconds</div>
      </div>
    </div>
  );
}

export default Countdown;
