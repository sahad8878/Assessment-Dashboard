import React from 'react'

function GeneralInformation() {

    const convertToPercentage = (value) => {
        return (value / 10) * 100;
      };
    
      //pass as props
      const projectProgress = 3;
      const userProgress = 2;
      const channelProgress = 5;
      const deviceProgress = 4

  return (
    <div className="max-w-lg mx-auto p-4 bg-white  shadow-md w-full">
    <h2 className=" font-medium text-base mb-4">
      General Information
    </h2>

    <div className="flex flex-col gap-4 text-[#909090]">
      <div className="flex items-center">
        <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">
          Projects
        </h3>
        <div className="bg-gray-300 h-4 rounded-lg flex-grow">
          <div
            className="bg-[#0B3366] h-full rounded-lg"
            style={{
              width: `${convertToPercentage(projectProgress)}%`,
            }}
          ></div>
        </div>
        <h3 className="text-sm font-semibold  text-textLight ms-2">
          {projectProgress}/10
        </h3>
      </div>

      <div className="flex items-center">
        <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">
          Users
        </h3>
        <div className="bg-gray-300 h-4 rounded-lg flex-grow">
          <div
            className="bg-[#0B3366] h-full rounded-lg"
            style={{
              width: `${convertToPercentage(userProgress)}%`,
            }}
          ></div>
        </div>
        <h3 className="text-sm font-semibold  text-textLight ms-2">
          {userProgress}/10
        </h3>
      </div>

      <div className="flex items-center">
        <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">
          Channels
        </h3>
        <div className="bg-gray-300 h-4 rounded-lg flex-grow">
          <div
            className="bg-[#0B3366] h-full rounded-lg"
            style={{
              width: `${convertToPercentage(channelProgress)}%`,
            }}
          ></div>
        </div>
        <h3 className="text-sm font-semibold  text-textLight ms-2">
          {channelProgress}/10
        </h3>
      </div>
      <div className="flex items-center">
        <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">
          Devices
        </h3>
        <div className="bg-gray-300 h-4 rounded-lg flex-grow">
          <div
            className="bg-[#0B3366] h-full rounded-lg"
            style={{
              width: `${convertToPercentage(deviceProgress)}%`,
            }}
          ></div>
        </div>
        <h3 className="text-sm font-semibold  text-textLight ms-2">
          {deviceProgress}/10
        </h3>
      </div>
    </div>
  </div>
  )
}

export default GeneralInformation
