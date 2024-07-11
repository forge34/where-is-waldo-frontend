import React from "react";
// import PropTypes from "prop-types";
import styles from "../styles/css/header.module.css";
import Timer from "./timer";

function Header({ }) {
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>Where is waldo</p>
      <Timer start={true}></Timer>
      <p className={styles.leaderboard}>Leaderboard</p>
    </div>
  );
}

// Header.propTypes = { startGame: PropTypes.bool };

export default Header;
