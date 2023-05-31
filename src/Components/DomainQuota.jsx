import React from "react";
import Chart from "react-apexcharts";

function DomainQuota() {
  const info = 50;
  const options = {
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            fontSize: "16px",
            color: "#000",
            offsetY: 8,
            formatter: function (val) {
              return `${val}`;
            },
          },
        },
      },
    },
    colors: ["#0B3366", "#f39c12", "#e74c3c"],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            height: "auto",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="max-w-lg mx-auto p-2.5 bg-white  shadow-md w-full   ">
      <h2 className="font-medium text-base -mb-3 mr-3 ">Domain Quota</h2>
      <div className="flex ">
        <div className="w-1/3 flex flex-col items-center justify-center">
          <Chart
            options={options}
            series={[info]}
            type="radialBar"
            width="100%"
            height="160"
          />
        </div>

        <div className="w-1/3 flex flex-col items-center justify-center space-y-1">
          <span className="text-[#909090]">Data usage</span>
          <span className="font-medium">60.33gb/100gb</span>
        </div>

        <div className="w-1/3 flex flex-col  space-y-1">
          <div className="flex flex-col">
            <div className="space-x-2 space-y-2">
              <span className="text-[#909090] text-sm mr-8">Today</span>
              <span className="text-[9px] text-[#3CC25A]">Increase</span>
            </div>
            <div className="space-x-2 space-y-2">
              <span className="font-medium mr-3">30.00%</span>
              <span className="text-[#909090] text-xs">+15.00</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="space-x-2 space-y-2">
              <span className="text-[#909090] text-sm mr-2">This Week</span>
              <span className="text-[9px] text-[#FF6A6A]">Decrease</span>
            </div>
            <div className="space-x-2 space-y-2">
              <span className="font-medium mr-4">30.00%</span>
              <span className="text-xs text-[#909090] ">+15.00</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="space-x-2 space-y-2">
              <span className="text-[#909090] text-sm">This Month</span>
              <span className="text-[9px] text-[#FF6A6A]">Decrease</span>
            </div>
            <div className="space-x-2 space-y-2">
              <span className="font-medium mr-3">30.00%</span>
              <span className="text-xs text-[#909090] ">+15.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainQuota;
