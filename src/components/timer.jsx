import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import adjustTimer from "../utils/adjust-timer";

function Timer({ }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div>
      <p>{adjustTimer(time)}</p>
    </div>
  );
}

Timer.propTypes = {
  start: PropTypes.bool,
};

export default Timer;
