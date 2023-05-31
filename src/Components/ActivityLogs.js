import React from 'react'
import monitorIcon from "../Assets/monitor.png";
import cammandLIneIcon from "../Assets/command-line.png";
import playlistIcon from "../Assets/playlist.png";
function ActivityLogs() {
  return (
    <div class="w-full max-w-md p-4 bg-white border border-gray-200   sm:p-5 shadow-md">
    <div class="flex items-center justify-between  ">
      <h5 class="font-medium text-base leading-none text-gray-900 ">
        Activity Logs
      </h5>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200">
        <li class="py-2 sm:py-2">
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <img
                class="-mt-4"
                src={monitorIcon}
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0 text-[#545454]">
              <p class="text-lg font-normal  truncate ">Device</p>
              <p class="text-xs text-gray-500 font-normal  ">
                FutureIK-cinimas modified Successfully
              </p>
            </div>
            <div class="flex flex-col items-center text-sm font-normal text-[#909090] ">
              <span>16 mar 2023,</span>
              <span>06:30:25 PM</span>
            </div>
          </div>
        </li>
        <li class="py-2 sm:py-2">
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <img
                class="-mt-4"
                src={cammandLIneIcon}
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0 text-[#545454]">
              <p class="text-lg font-normal  truncate ">Device</p>
              <p class="text-xs text-gray-500 font-normal  ">
                FutureIK-cinimas modified Successfully
              </p>
            </div>
            <div class="flex flex-col items-center text-sm font-normal text-[#909090] ">
              <span>16 mar 2023,</span>
              <span>06:30:25 PM</span>
            </div>
          </div>
        </li>
        <li class="py-2 sm:py-2">
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <img
                class="-mt-4"
                src={playlistIcon}
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0 text-[#545454]">
              <p class="text-lg font-normal  truncate ">Device</p>
              <p class="text-xs text-gray-500 font-normal  ">
                FutureIK-cinimas modified Successfully
              </p>
            </div>
            <div class="flex flex-col items-center text-sm font-normal text-[#909090] ">
              <span>16 mar 2023,</span>
              <span>06:30:25 PM</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default ActivityLogs
