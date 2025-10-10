import {useEffect, useState} from "react";

type TrafficLightColor = keyof typeof colors;

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
};

export const useTrafficLight = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;
    const intervalId = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000);

    return () => {
      console.log('cleanup');
      clearInterval(intervalId);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;
    if (light === 'red') {
      setLight('green');
      setCountdown(5);
    } else if (light === 'green') {
      setLight('yellow');
      setCountdown(5);
    } else if (light === 'yellow') {
      setLight('red');
      setCountdown(5);
    }
  }, [countdown, light]);

  return {
    countdown,
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
  };
}