import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import bg1 from "./assets/bg2.jpg";
import Header from "./components/header";
import CharacterDropdown from "./components/character-dropdown";
import { useImmer } from "use-immer";

function Index({}) {
  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useImmer({ x: 0, y: 0 });
  return (
    <div>
      <Header></Header>
      <CharacterDropdown
        x={dimension.x}
        y={dimension.y}
        open={open}
      ></CharacterDropdown>
      <img
        src={bg1}
        onClick={(e) => {
          setDimension((draft) => {
            draft.x = e.pageX;
            draft.y = e.pageY;
          });
          setOpen(!open);
        }}
      />
      <Outlet></Outlet>
    </div>
  );
}

Index.propTypes = {};

export default Index;
