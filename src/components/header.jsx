import React from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/css/header.css";

function Header({ children }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <p>
        <Link to={"/"}>Hidden Heroes: Beyond the Veil</Link>
      </p>
      {children}
      <p
        className="leaderboard"
        onClick={() => {
          navigate("/leaderboard");
        }}
      >
        Leaderboard
      </p>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.element,
  startGame: PropTypes.bool,
};

export default Header;
