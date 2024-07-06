import React from "react";
// import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

function Index({}) {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

Index.propTypes = {};

export default Index;
