import React from 'react'

function Topbar() {
  return (
    <div className="  p-4 bg-[#FFFFFF] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mb-5 ">
    <div className="font-medium text-base"> Adidas mobile </div>
    <div className=" flex flex-col">
      <span className="text-[#C6C6C6]">campaigns</span>
      <span className="font-medium text-base">8</span>
    </div>
    <div className=" flex flex-col">
      <span className="text-[#C6C6C6]">Channels</span>
      <span className="font-medium text-base">9/10</span>
    </div>
    <div className=" flex flex-col">
      <span className="text-[#C6C6C6]">Last Edited by</span>
      <span className="font-medium text-base">varun</span>
    </div>
    <div className=" flex flex-col">
      <span className="text-[#C6C6C6]">Last Edited on</span>
      <span className="font-medium text-base">5 hourse ago </span>
    </div>
  </div>
  )
}

export default Topbar
