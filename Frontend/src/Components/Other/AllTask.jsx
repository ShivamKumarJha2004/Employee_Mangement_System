import React from "react";

const AllTask = ({ data = [] }) => {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg text-white min-h-[20rem] overflow-auto relative top-10 mx-auto max-w-7xl w-full">
      {/* Header */}
      <div className="bg-rose-100 rounded-md text-gray-800 h-auto w-full grid grid-cols-1 sm:grid-cols-5 gap-4 py-2 px-4 font-semibold text-center">
        <div>
          <h3>Employee Name</h3>
        </div>
        <div>
          <h3>Active Task</h3>
        </div>
        <div>
          <h3>New Task</h3>
        </div>
        <div>
          <h3>Completed Task</h3>
        </div>
        <div>
          <h3>Failed Task</h3>
        </div>
      </div>

      {/* Task Rows */}
      <div className="p-4 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-transparent border-2 border-green-400 rounded-md px-4 py-3 flex flex-col sm:flex-row justify-between items-start text-sm sm:text-base gap-4"
          >
            {/* Employee Name */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-bold">{item.name}</h2>
            </div>

            {/* Task Counts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 sm:flex-1 text-center">
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Active</span>
                <h3 className="text-white font-semibold">
                  {item.taskCount.active || 0}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-400">New</span>
                <h3 className="text-white font-semibold">
                  {item.taskCount.newtask || 0}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Completed</span>
                <h3 className="text-white font-semibold">
                  {item.taskCount.completed || 0}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Failed</span>
                <h3 className="text-white font-semibold">
                  {item.taskCount.failed || 0}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
