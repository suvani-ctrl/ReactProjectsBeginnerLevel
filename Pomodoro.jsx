import React, { useEffect, useState, useRef } from 'react';
import "../pomodoro.css";


const Pomodoro = () => {
  const [Minutes, SetMinutes] = useState(25);
  const [Seconds, setSeconds] = useState(0);
  const [Running, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const handleStart = () => {
    if (!Running) {
      setIsRunning(true);

      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            SetMinutes((prevMinutes) => {
              if (prevMinutes === 0) {
           
                clearInterval(intervalRef.current);
                setIsRunning(false);
                return 0;
              }
              return prevMinutes - 1; 
            });
            return 59; 
          }
          return prevSeconds - 1; 
        });
      }, 1000);
    }
  };

  const handlePause = () => {
    if (Running) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    SetMinutes(25);
    setSeconds(0);  
  };

  return (
    <div>
      <div className="NavButtons">
        <div className="button-container">
          <button className="Report">Report</button>
          <button className="StopWatch">StopWatch</button>
          <button className="ShortBreak">Short Break</button>
        </div>
      </div>

      <div className="box1">
        <h1 className="MainTimer"> 
          {Minutes}:{Seconds < 10 ? `0${Seconds}` : Seconds} 
        </h1>
      </div>

      <div>
        <button className="Start" onClick={handleStart}>Start</button>
        
        {/* Conditionally render Pause and Reset buttons */}
        {Running && (
          <>
            <button className="Pause" onClick={handlePause}>Pause</button>
            <button className="Reset" onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pomodoro;
