import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import DashboardView from "../Components/DashboardView";
function Dashboard() {
  return (
    <>
   <div className="flex">
  <Sidebar />
  <div className="ml-[220px] flex-grow">
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-grow">
        <DashboardView />
      </div>
    </div>
  </div>
  
</div>
    </>
  );
}

export default Dashboard;
