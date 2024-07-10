import React from "react";
// import PropTypes from "prop-types";
import checkmark from "../assets/check-mark.svg";

function Marker() {
  return (
    <div>
      <img
        src={checkmark}
        className="checkmark"
        style={{ position: "absolute", top: "100px", left: "100px" }}
      />
    </div>
  );
}

Marker.propTypes = {};

export default Marker;
