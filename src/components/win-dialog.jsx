import React from "react";
// import PropTypes from 'prop-types'

function WinDialog() {
  async function handleClick(e) {
    e.preventDefault();
  }

  return (
    <form id="win-form" action="">
      <label htmlFor="playername">Enter name</label>
      <input name="playername" id="playername" />

      <button type="submit" onClick={handleClick}>
        Submit score
      </button>
    </form>
  );
}

// WinDialog.propTypes = {};

export default WinDialog;
