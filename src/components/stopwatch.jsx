import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import adjustTimer from "../utils/adjust-timer";
import { useLocation } from "react-router-dom";

function Stopwatch({ running }) {
  const [time, setTime] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (running && location.pathname === "/game") {
      const intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (location.pathname != "/game") {
      setTime(0);
    }
  }, [running, location.pathname]);

  return (
    <div className="stopwatch">
      <p className="stopwatch-text">{adjustTimer(time)}</p>
    </div>
  );
}

Stopwatch.propTypes = { running: PropTypes.bool };

export default Stopwatch;
