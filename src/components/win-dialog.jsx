import React, { useEffect, useRef, useState } from "react";
// import PropTypes from 'prop-types'

function WinDialog() {
  const [value, setValue] = useState("");
  const dialogRef = useRef(null);
  async function handleClick(e) {
    e.preventDefault();
  }

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog ref={dialogRef} className="dialog">
      <form id="win-form" onSubmit={handleClick}>
        <label htmlFor="playername">Enter name</label>
        <input
          value={value}
          name="playername"
          id="playername"
          onChange={(e) => {
            setValue(e.value);
          }}
          autoFocus={true}
        />

        <button type="submit">Submit score</button>
      </form>
    </dialog>
  );
}

// WinDialog.propTypes = {};

export default WinDialog;
