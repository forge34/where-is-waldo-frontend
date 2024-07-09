import React from "react";
import PropTypes from "prop-types";

function Rectangle({ x, y }) {
  return (
    <div
      className="rect"
      style={{ top: y, left: x, transform: "translate(-50%,-50%)" }}
    ></div>
  );
}

Rectangle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Rectangle;
