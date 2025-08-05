import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const totalTime = 20 * 60;

const formatTime = (time) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default function Header({ onTimeUp, isSubmitted }) {
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    if (timeUp && !isSubmitted) {
      onTimeUp();
    }
  }, [timeUp, onTimeUp, isSubmitted]);

  return (
    <div className='flex items-center justify-center gap-4 flex-wrap'>
      <h2 className='font-montserrat font-bold text-base sm:text-lg md:text-xl'>
        Time remaining
      </h2>
      <CountdownCircleTimer
        isPlaying={!isSubmitted}
        duration={totalTime}
        strokeWidth={5}
        size={60}
        trailColor='#CCCCCC'
        colors='#009688'
        onComplete={() => {
          setTimeUp(true);
          return { shouldRepeat: false };
        }}>
        {({ remainingTime }) => (
          <div className='text-center'>
            <div className='text-xs sm:text-sm md:text-base font-bold text-accent font-montserrat'>
              {formatTime(remainingTime)}
            </div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
