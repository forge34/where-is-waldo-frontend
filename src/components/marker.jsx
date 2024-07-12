import React from "react";
import PropTypes from "prop-types";
import checkmark from "../assets/check-mark.svg";

function Marker({ x, y, width, height }) {
  return (
    <img
      width={width}
      height={height}
      src={checkmark}
      className="checkmark"
      style={{ position: "absolute", top: y, left: x }}
    />
  );
}

Marker.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Marker;
