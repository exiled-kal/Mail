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
        <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"/>
      </div>
      <div className="header__middle"> </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
