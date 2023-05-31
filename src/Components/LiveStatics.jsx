import React from "react";
import Chart from "react-apexcharts";

function LiveStatics() {
  const warning = 75;
  const info = 50;
  const error = 30;

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
  const series = [75, 50, 30];
  return (
    <div className="max-w-lg mx-auto p-2.5 bg-white  shadow-md w-full   ">
      <h2 className="font-medium text-base -mb-3 mr-3 ">Live Statistics</h2>
      <div className="flex ">
        <div className="w-1/3 flex flex-col items-center justify-center">
          <Chart
            options={options}
            series={[info]}
            type="radialBar"
            width="100%"
            height="160"
          />
          <div className="p-1 border w-20 border-[#0C66D6]">
            <h3 className="text-center text-[13px] text-[#0C66D6]">Info</h3>
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center justify-center">
          <Chart
            options={options}
            series={[warning]}
            type="radialBar"
            width="100%"
            height="160"
          />
          <div className="p-1 border w-20 border-[#0C66D6]">
            <h3 className="text-center text-[13px] text-[#0C66D6]">Warning</h3>
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-center justify-center">
          <Chart
            options={options}
            series={[error]}
            type="radialBar"
            width="100%"
            height="160"
          />
          <div className="p-1 border w-20 border-[#0C66D6]">
            <h3 className="text-center text-[13px] text-[#0C66D6]">Errors</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveStatics;
