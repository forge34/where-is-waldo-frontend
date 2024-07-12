import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/css/header.module.css";

function Header({ children }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Hidden Heroes: Beyond the Veil</p>
      {children}
      <p className={styles.leaderboard}>Leaderboard</p>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.element,
  startGame: PropTypes.bool,
};

export default Header;
