import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Notfication({ message, type, show, setShow }) {
  useEffect(() => {
    {
      const timeout = setTimeout(() => {
        setShow((draft) => {
          draft.show = false;
        });
      }, 2000);

      return () => {
        return clearTimeout(timeout);
      };
    }
  }, [show, setShow]);
  return (
    <>
      {show && (
        <div className={"notfication notfication-" + type}>{message}</div>
      )}
    </>
  );
}

Notfication.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default Notfication;
