import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon></ReorderIcon>
        </IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/" alt="logo"/>
      </div>
      <div className="header__middle"> </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
