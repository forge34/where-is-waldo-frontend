import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import adjustTimer from "../utils/adjust-timer";
import { useLocation } from "react-router-dom";

function Timer({ stopTimer = false, setExternalTime, setStop }) {
  const [time, setTime] = useState(0);
  // const location = useLocation();

  useEffect(() => {
    if (!stopTimer) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      setExternalTime(time);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time, stopTimer, setExternalTime]);

  return (
    <div>
      <p>{adjustTimer(time)}</p>
    </div>
  );
}

Timer.propTypes = {
  stopTimer: PropTypes.bool,
  setExternalTime: PropTypes.func,
  setStop: PropTypes.func,
};

export default Timer;
