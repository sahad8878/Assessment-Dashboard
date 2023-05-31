import React from "react";

function DeviceInformation() {
  const devices = [
    {
      name: "Text Device 1",
      status: "Online",
      lastSeen: new Date("2023-05-30T12:30:00"),
    },
    {
      name: "Text Device 2",
      status: "Online",
      lastSeen: new Date("2023-05-29T07:45:00"),
    },
    {
      name: "Text Device  3",
      status: "Offline",
      lastSeen: new Date("2023-05-31T10:15:00"),
    },
    {
      name: "Text Device 4",
      status: "Offline",
      lastSeen: new Date("2023-05-31T09:15:00"),
    },
    {
      name: "Text Device 5",
      status: "Online",
      lastSeen: new Date("2023-05-31T09:15:00"),
    },
    {
      name: "Text Device 6",
      status: "Online",
      lastSeen: new Date("2023-05-31T09:15:00"),
    },
    {
      name: "Text Device 7",
      status: "Offline",
      lastSeen: new Date("2023-05-31T09:15:00"),
    },
  ];
  return (
    <div className="max-w-lg mx-auto p-4 bg-white  shadow-md w-full ">
      <h2 className="font-medium text-base mb-4">Device Information</h2>

      <div className="overflow-x-auto">
        <div className="max-h-40 overflow-y-scroll">
          <table className="w-full table-auto ">
            <thead className=" font-light text-[#545454]">
              <tr>
                <th className="px-4 py-2">Device Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Last Seen</th>
              </tr>
            </thead>
            <tbody className=" text-[#545454]">
              {devices.map((device, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="px-4 py-2 text-sm">{device.name}</td>
                  <td className="px-4 py-2 text-sm">
                    {device.status === "Offline" ? (
                      <div className="bg-[#E40404] text-white rounded text-[12px] flex justify-center">
                        {device.status}
                      </div>
                    ) : (
                      <div className="bg-[#009421] text-white rounded text-[12px] flex justify-center">
                        {device.status}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {device.lastSeen.toLocaleString("en-US", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DeviceInformation;
