import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import leonardo from "../assets/ninge turtle.png";
import CharacterDropdownItem from "./character-dropdown-item";
import { dropdownContext } from "../utils/character-dropdown-context";
import goku from "../assets/goku.png";
import jasonVoorhees from "../assets/jason voorhees.png";
import guitarGuy from "../assets/guiater-guy.png";
import mojoJojo from "../assets/mojo jojo.png";

const dropdownItems = [
  {
    name: "leonardo",
    imgSrc: leonardo,
  },
  {
    name: "goku",
    imgSrc: goku,
  },
  {
    name: "jason voorhees",
    imgSrc: jasonVoorhees,
  },
  {
    name: "guitar guy",
    imgSrc: guitarGuy,
  },
  {
    name: "mojo jojo",
    imgSrc: mojoJojo,
  },
];

function CharacterDropdown({ img }) {
  const { dimension } = useContext(dropdownContext);
  const [overflow, setOverflow] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef(null);

  useLayoutEffect(() => {
    let dropdownRect = dropdownRef.current.getBoundingClientRect();

    let overflowX = 0;
    let overflowY = 0;

    if (dropdownRect.right > img.current.width) {
      overflowX = dropdownRect.width;
    }

    if ((dropdownRect.bottom + window.scrollY).toFixed() > img.current.height) {
      overflowY = dropdownRect.height;
    }

    setOverflow({ x: overflowX, y: overflowY });
  }, [img]);

  const flip = overflow.x > 0 ? "flip" : "";
  return (
    <div
      ref={dropdownRef}
      className={"dropdown " + flip}
      style={{
        top: dimension.y + 70 - overflow.y,
        left: dimension.x + 15 - overflow.x,
      }}
    >
      <h1 className="dropdown-title ">Select Character</h1>
      {dropdownItems?.map((item) => {
        return (
          <CharacterDropdownItem
            name={item.name}
            imgSrc={item.imgSrc}
            key={item.name}
          />
        );
      })}
    </div>
  );
}

CharacterDropdown.propTypes = {
  isOpen: PropTypes.bool,
  img: PropTypes.shape({ current: PropTypes.any }),
};

export default CharacterDropdown;
