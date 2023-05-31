import React from "react";
import Topbar from "./Topbar";
import GeneralInformation from "./GeneralInformation";
import LiveStatics from "./LiveStatics";
import DeviceInformation from "./DeviceInformation";
import ActivityLogs from "./ActivityLogs";
import DomainQuota from "./DomainQuota";
import Map from "./Map";

function DashboardView() {
  return (
    <div className=" bg-[#F6F6F6] p-8">
      <div className="mb-6 text-xl font-medium">Project</div>
      <Topbar />
      <div className=" flex space-x-3">
        <div className=" w-8/12  h-64 space-y-2 ">
          <div className=" flex space-x-2">
            <div className=" w-[50%]">
              <GeneralInformation />
            </div>
            <div className="h-12 w-[50%] bg-stone-600">
              <LiveStatics />
            </div>
          </div>
          <div className=" flex space-x-2">
            <div className=" w-[50%]">
              <DeviceInformation />
            </div>
            <div className="h-12 w-[50%]  ">
              <ActivityLogs />
            </div>
          </div>
        </div>
        <div className=" w-4/12 bg-[#FFFFFF] h-64 space-y-5">
          <Map />
          <div className="">
            <DomainQuota />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
