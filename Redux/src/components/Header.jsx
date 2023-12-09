import React from "react";
import { BsCart4 } from "react-icons/bs";

const Header = (props) => {
  return (
    <div className="absolute text-white">
      <span className="relative top-2">{props.data.length}</span>
      <BsCart4 />
    </div>
  );
};

export default Header;
