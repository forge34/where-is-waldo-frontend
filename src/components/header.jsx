import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/css/header.module.css";
import { useNavigate, Link } from "react-router-dom";
// import logo from "../assets/logo.png";

function Header({ children }) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* <img src={logo} className={styles.logo} /> */}
      <p className={styles.title}>
        <Link to={"/"}>Hidden Heroes: Beyond the Veil</Link>
      </p>
      {children}
      <p
        className={styles.leaderboard}
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
