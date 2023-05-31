import React from "react";

import notificationIcon from "../Assets/notification.png";
import headsetIcon from "../Assets/headset.png";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="h-[68px] bg-[#FAFAFA] ">
      <div className="flex justify-end content-end ">
        <div className="flex space-x-7 mt-4 mr-10">
          <span className="mt-1">
            <img className="ms-auto" src={headsetIcon} />
          </span>
          <span className="mt-1">
            <img className="ms-auto" src={notificationIcon} />
          </span>
          <span>
            <Dropdown />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
