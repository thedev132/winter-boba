"use client";

import { useEffect, useState, JSX } from 'react';

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);
  const [snowflakesClicked, setSnowflakesClicked] = useState(0);

  useEffect(() => {
    const snowflakeCount = 30; 
    const snowflakesArray = Array.from({ length: snowflakeCount }).map((_, index) => {

      const horizontalPosition = Math.random() * 100; 
      return (
          <div
            key={index}
            className={`snowflake absolute animate-snow select-none`}
            onClick={() => {
              setSnowflakesClicked(prev => prev + 1) 
            }}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`, 
              left: `${horizontalPosition}vw`, 
              top: `-5vh`, 
              fontSize: `${Math.random() * 20 + 15}px`, 
            }}
          >
            ❄️
          </div>
      );
    });

    setSnowflakes(snowflakesArray);
  }, []);

  return (
    <>
      <p className='absolute top-5 right-5 text-xl'>Score: { snowflakesClicked } ❄️ </p>
      {snowflakes}
    </>
  );
};

export default Snowflakes;
