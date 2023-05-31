import React from "react";
import accountIcon from "../Assets/account.png";
import notificationIcon from "../Assets/notification.png";
import headsetIcon from "../Assets/headset.png";
function Header() {
  return (
    <div className="h-[68px] bg-[#FAFAFA] ">
      <div className="flex justify-end content-end ">
        <div className="flex space-x-7 mt-5 mr-10">
          <img className="ms-auto" src={headsetIcon} />

          <img className="ms-auto" src={notificationIcon} />
          <img className="ms-auto" src={accountIcon} />
        </div>
      </div>
    </div>
  );
}

export default Header;
