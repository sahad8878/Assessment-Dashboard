import React from "react";
import log from "../Assets/logo.png";
import dashboardIcon from "../Assets/dashboard.png";
import campaignIcon from "../Assets/campaign.png";
import commandIcon from "../Assets/command.png";
import zoneIcon from "../Assets/zone.png";
import channelsIcon from "../Assets/channels.png";
import devicesIcon from "../Assets/devices.png";
import mediaLibraryIcon from "../Assets/mediaLibrary.png";
import historyIcone from "../Assets/history.png";

function Sidebar() {
  return (
    <aside className="  h-screen fixed hidden sm:block ">
      <div className=" ">
        <div className=" h-screen  p-6 bg-[#0B3366] shadow w-[220px] ">
          <div className="space-y-3">
            <div className="mb-5 ">
              <img className="h-10" src={log}></img>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-3 text-sm">
                <li className="rounded-sm">
                  <span
                    className={`flex items-center p-2 space-x-4 rounded-md  `}
                  >
                    <img
                      className=" h-[20px] w-[20px] "
                      src={dashboardIcon}
                      alt="logo"
                    />

                    <span className="text-white">Dashboard</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center  p-2 space-x-4 rounded-md">
                    <img
                      className=" h-[20px] w-[20px]"
                      src={campaignIcon}
                      alt="logo"
                    />

                    <span className="text-white">Campaign</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center p-2 space-x-4 rounded-md ">
                    <img
                      className=" h-[20px] w-[20px]"
                      src={commandIcon}
                      alt="logo"
                    />

                    <span className="text-white">Command</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center p-2 space-x-4 rounded-md ">
                    <img
                      className="h-[20px] w-[20px]"
                      src={zoneIcon}
                      alt="logo"
                    />
                    <span className="text-white">Zones</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center p-2 space-x-4 rounded-md ">
                    <img
                      className="h-[20px] w-[20px]"
                      src={channelsIcon}
                      alt="logo"
                    />
                    <span className="text-white">Channels</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center p-2 space-x-4 rounded-md ">
                    <img
                      className="h-[20px] w-[20px]"
                      src={devicesIcon}
                      alt="logo"
                    />
                    <span className="text-white">Devices</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center p-2 space-x-4 rounded-md ">
                    <img
                      className=" h-[20px] w-[20px]"
                      src={mediaLibraryIcon}
                      alt="logo"
                    />
                    <span className="text-white">Media Library</span>
                  </span>
                </li>
                <li className="rounded-sm">
                  <span className="flex items-center p-2 space-x-4 rounded-md ">
                    <img
                      className=" h-[20px] w-[20px] "
                      src={historyIcone}
                      alt="logo"
                    />
                    <span className="text-white">History</span>
                  </span>
                </li>

                {/* <li className="rounded-sm cursor-pointer">
                <span 
                // onClick={handleLogout}
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span  className="text-[#97CADB] hover:text-white">Logout</span>
                </span>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
