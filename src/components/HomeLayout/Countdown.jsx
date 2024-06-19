"use client";

import { montserrat, unica_one } from "@/utils/fonts";
import { useState, useEffect } from "react";

const targetDate = new Date("November 18, 2024");
const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeToTarget = targetDate - now;

      const days = Math.floor(timeToTarget / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeToTarget % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeToTarget % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeToTarget % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div
      className={`${unica_one.className} count-down mt-4 flex items-center gap-2 sm:gap-6 lg:gap-7 lg:mt-20`}
    >
      <span>
        {formatTime(countdown.days)}
        <small className={montserrat.className}>D</small>
      </span>
      <span>
        {formatTime(countdown.hours)}
        <small className={montserrat.className}>H</small>
      </span>
      <span>
        {formatTime(countdown.minutes)}
        <small className={montserrat.className}>M</small>
      </span>
      <span>
        {formatTime(countdown.seconds)}
        <small className={montserrat.className}>s</small>
      </span>
    </div>
  );
};

export default Countdown;
