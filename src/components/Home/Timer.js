import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Vector_tri.jpg';
import image from '../../assets/Vector_trr.jpg';
import './Timer.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  useEffect(() => {
    let interval;

    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        const remainingSeconds = totalSeconds - 1;
        setHours(Math.floor(remainingSeconds / 3600));
        setMinutes(Math.floor((remainingSeconds % 3600) / 60));
        setSeconds(remainingSeconds % 60);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const label = `${hours}h ${minutes}m ${seconds}s`;

  return (
    <div>
      <div className='Mu'>
        <div className='cir'>
          <CountdownCircleTimer
            isPlaying={isRunning}
            duration={totalSeconds}
            colors={['#FF6A6A', 2]}
            trailColor="transparent"
            rotation="counterclockwise"
            size={170}
          >
            {({ remainingTime, animatedColor }) => {
              return (
                <div>
                  <div style={{ color: animatedColor }}>
                    {remainingTime > 0 ? `${hours}h ${minutes}m ${seconds}s` : label}
                  </div>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div>
          <div className="hs">
            <div className='Hou'>
              <div>Hours</div>
              <img src={image} onClick={() => setHours(hours + 1)} className='siz' alt="Increment Hours"></img>
              <div>{hours}</div>
              <img src={image1} onClick={() => setHours(hours - 1)} className='siz' alt="Decrement Hours"></img>
            </div>

            <div className='Hou'>
              <div>Minutes</div>
              <img src={image} onClick={() => setMinutes(minutes + 1)} className='siz' alt="Increment Minutes"></img>
              <div>{minutes}</div>
              <img src={image1} onClick={() => setMinutes(minutes - 1)} className='siz' alt="Decrement Minutes"></img>
            </div>

            <div className='Hou'>
              <div>Seconds</div>
              <img src={image} onClick={() => setSeconds(seconds + 1)} className='siz' alt="Increment Seconds"></img>
              <div>{seconds}</div>
              <img src={image1} onClick={() => setSeconds(seconds - 1)} className='siz' alt="Decrement Seconds"></img>
            </div>
          </div>
          <div>
            {isRunning && <button onClick={resetTimer} className='start'>Pause</button>}
            {!isRunning && <button onClick={toggleRunning} className='start'>Start</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
