import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CountingAnimationProps {
  finalValue: number;
  duration: number;
  className: string;
}

const CountingAnimation: React.FC<CountingAnimationProps> = ({
  finalValue,
  duration,
  className,
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      const interval = duration / finalValue;
      const increment = Math.ceil(finalValue / interval);
      let currentCount = 0;

      const countInterval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= finalValue) {
          currentCount = finalValue;
          clearInterval(countInterval);
        }
        setCount(currentCount);
      }, interval);

      return () => {
        clearInterval(countInterval);
      };
    }
  }, [finalValue, duration, inView]);

  return (
    <div className="text-4xl text-center">
      <span className={className} ref={ref} key={finalValue}>
        {count}
      </span>
    </div>
  );
};

export default CountingAnimation;
