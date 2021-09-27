import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import {IconButton} from "@material-ui/"

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <ReorderIcon></ReorderIcon>
      </div>
      <div className="header__middle"> </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
