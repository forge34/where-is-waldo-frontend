import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/css/header.module.css";

function Header({}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Where is waldo</h2>
      <h2 className={styles.leaderboard}>Leaderboard</h2>
    </div>
  );
}

Header.propTypes = {};

export default Header;
